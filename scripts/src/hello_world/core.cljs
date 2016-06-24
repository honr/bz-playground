(ns hello-world.core)

(def x 20)
(enable-console-print!)
(for [h1 (.querySelectorAll js/document "h1")]
  (.add (.-classList h1) "red"))
(println "Hello World!" x)
