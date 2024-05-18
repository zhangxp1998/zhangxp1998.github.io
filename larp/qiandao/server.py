
import http.server
import os
import requests
import sys


class BackupHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    BACKUP_URL = 'https://m.qiandaoapp.com/'

    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            print("{} is not found, downloading and saving to local cache".format(path))
            url = self.BACKUP_URL + self.path
            resp = requests.get(url)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "wb") as fp:
                fp.write(resp.content)
        return super().do_GET()

    def guess_type(self, path):
        if path.endswith("plugin/drama-tickets"):
            print(path)
            return "text/html"
        return super().guess_type(path)


def main():
    with http.server.ThreadingHTTPServer(('', 8000), BackupHTTPRequestHandler) as httpd:
        host, port = httpd.socket.getsockname()[:2]
        url_host = f'[{host}]' if ':' in host else host
        print(
            f"Serving HTTP on {host} port {port} "
            f"(http://{url_host}:{port}/) ..."
        )
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nKeyboard interrupt received, exiting.")
            sys.exit(0)


if __name__ == '__main__':
    main()
