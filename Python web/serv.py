#!/usr/bin/env python
 
import BaseHTTPServer
import CGIHTTPServer
import cgitb; cgitb.enable()
import sys


handler = CGIHTTPServer.CGIHTTPRequestHandler
handler.cgi_directories = ["/"]
server = BaseHTTPServer.HTTPServer
server_address = ("", 8000)


try:
	httpd = server(server_address, handler)
	httpd.serve_forever()
except KeyboardInterrupt:
	pass
except:
	print "Caught %s exception: %s" % (sys.exc_info()[0].__name__, sys.exc_info()[1])
