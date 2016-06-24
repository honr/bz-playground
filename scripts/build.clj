(ns s.builder
  (:require [cljs.repl
             cljs.build.api
             cljs.browser]))

;; (cljs.repl/repl (cljs.repl.browser/repl-env)
;;                 :watch (str *cwd* "/src")
;;                 :output-dir "out")

;; (cljs.build.api/watch
;;  (str *cwd* "/src")
;;  {:output-to "out/alpha/a.js" :main 'hello-world.core})

;; (require 'cljs.build.api)
(cljs.build.api/watch
 (str *cwd* "/src")
 {:output-to "out/a.js"
  :optimizations :advanced
  :optimize-constants false
  ;; :language-in :ecmascript6-typed
  :language-out :ecmascript6-strict

  ;; Useful/needed for non :advanced optimizations
  :main 'hello-world.core
  ;; :verbose true
  })
