#!/usr/bin/env python3
"""MENZ 食材价格采集 - 本地服务器
用法: python3 server.py
然后用手机访问: http://[电脑IP]:8080
"""
import http.server
import socketserver
import os
import socket
import sys

PORT = 8080
DIR = os.path.dirname(os.path.abspath(__file__))

# Find local IP
def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

if __name__ == "__main__":
    ip = get_local_ip()
    print(f"\n🍽 MENZ 食材价格采集服务器")
    print(f"{'='*40}")
    print(f"本地访问: http://localhost:{PORT}")
    print(f"手机访问: http://{ip}:{PORT}")
    print(f"{'='*40}")
    print(f"\n请确保手机和电脑在同一WiFi网络下\n")

    with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n已停止服务。")
            sys.exit(0)
