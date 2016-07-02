package main

import (
	"flag"
	"fmt"
	"net/http"
	"log"
	"strings"

	"github.com/honr/vulcan/static"
)

var (
	listen = flag.String("listen", ":8000",
		"Port (and possibly domains) to listen to and serve")
	dev = flag.Bool("dev", false,
		"When true, reloads static files for every request.  " +
			"Useful for development.")
	index = flag.String("index", "/index.html", "Default html file")
	staticDirs = flag.String("static", "web/static",
		"Colon separated directories containing static content.")
	staticBinDir = flag.String("static-bin", "bazel-bin/web/static",
		"Directory containing compiled static content.")
)

func main() {
	flag.Parse()

	m, err := static.HandlersFromDirs(strings.Split(*staticDirs, ":"), *dev)
	if err != nil {
		log.Fatal(err)
	}

	for _, filename := range []string{
		"script.js",
		"style.css",
	}{
		h, err := static.HandlerFuncFromFile(*staticBinDir + "/" + filename, *dev)
		if err != nil {
			log.Fatal(err)
		}
		m["/" + filename] = h
	}

	for p, h := range m {
		fmt.Println("registered path:", p);
		http.HandleFunc(p, h)
		if p == *index {
			http.HandleFunc("/", h)
		}
	}

	fmt.Println("listening on", *listen)
	http.ListenAndServe(*listen, nil)
}
