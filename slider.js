/*
 *  for image slider
 * ImgSlider 1.0
 *
 * Copyright (c) 2017 Bitchiko (Harry) Kodua (https://bichiko.github.io)
 * Licensed under the MIT
 *  example
 *    new slider().bindTo('img')
 *    you need to pass selector bindTo like img.myclass
 *    and it will get all images inside that selector parent area
 *    for example
 *      div class=imageArea
 *        img class=one0
 *        img class=one1
 *        img class=one2
 *        img class=one3
 *      /div
 *    if you pass img.one0 to bindTo then it shows all images inside imageArea
 */

(function(window, document) {
  function create(e, p, d = document) {
    this.element = d.createElement(e)
    p.appendChild(this.element)
    this.css = function(css) {
      this.style = "";
      if (css instanceof Array) {
        for (var i = 0; i < css.length; i++) {
          this.style += css[i] + ";"
        }
      } else if (typeof css === 'object') {
        for (var key in css) {
          this.style += key + ":" + css[key] + "; "
        }
      } else {
        this.style = css
      }
      this.element.setAttribute("style", this.style)
      return this.element
    }
  }

  function slider(e, d = document) {
    this.elements = e
    this.preview = null
    this.container = null
    this.out = null
    this.widthMargin = window.innerWidth > window.innerHeight ? 300 : 100
    this.heightMargin = window.innerWidth < window.innerHeight ? 300 : 100
    this.init = function(_src) {
      this.out = new create("div", d.body)
        .css({
          "position": "fixed",
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "z-index": "999999999",
          "margin": "auto",
          "width": window.innerWidth + "px",
          "height": window.innerHeight + "px",
          "background-color": "black",
          "opacity": "0.5"
        })

      this.container = new create("div", d.body)
        .css({
          "position": "fixed",
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "z-index": "999999999",
          "margin": "auto",
          "width": window.innerWidth - this.widthMargin + "px",
          "height": window.innerHeight - this.heightMargin + "px",
          "background-color": "black"
        })

      this.preview = new create("img", this.container)
        .css({
          "position": "absolute",
          "max-width": window.innerWidth - this.widthMargin + "px",
          "max-height": window.innerHeight - this.heightMargin + "px",
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0,
          "margin": "auto"
        })
      this.preview.setAttribute("src", _src)


      this.next = new create("img", this.container)
        .css({
          "position": "absolute",
          "height": "50px",
          "width": "auto",
          "bottom": 0,
          "right": 0,
          "top": 0,
          "margin": "auto",
          "transition": "300ms all",
          "cursor": "pointer"
        })
      this.next.onmouseover = function() {
        this.style.right = "-4px"
      }
      this.next.onmouseout = function() {
        this.style.right = "0px"
      }
      this.next.setAttribute("src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPHBhdGggZD0iTTM2MC43MzEsMjI5LjA3NWwtMjI1LjEtMjI1LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwcy01LjMsMTMuOCwwLDE5LjFsMjE1LjUsMjE1LjVsLTIxNS41LDIxNS41ICAgYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0YzMuNCwwLDYuOS0xLjMsOS41LTRsMjI1LjEtMjI1LjFDMzY1LjkzMSwyNDIuODc1LDM2NS45MzEsMjM0LjI3NSwzNjAuNzMxLDIyOS4wNzV6ICAgIiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==")

      this.previous = new create("img", this.container)
        .css({
          "position": "absolute",
          "height": "50px",
          "width": "auto",
          "bottom": 0,
          "left": 0,
          "top": 0,
          "margin": "auto",
          "transition": "400ms all"
        })
      this.previous.onmouseover = function() {
        this.style.left = "-4px"
      }
      this.previous.onmouseout = function() {
        this.style.left = "0px"
      }
      this.previous.setAttribute("src", "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+CjxnPgoJPHBhdGggZD0iTTE0NS4xODgsMjM4LjU3NWwyMTUuNS0yMTUuNWM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMXMtMTMuOC01LjMtMTkuMSwwbC0yMjUuMSwyMjUuMWMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjFsMjI1LjEsMjI1ICAgYzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGM1LjMtNS4zLDUuMy0xMy44LDAtMTkuMUwxNDUuMTg4LDIzOC41NzV6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==")
      return this
    }

    this.events = function(index) {
      var self = this
      this.index = index
      this.backward = function() {
        if (self.index > 0)
          --self.index
        else
          self.index = self.elements.length - 1
        self.preview.src = self.elements[self.index].src
      }
      this.forward = function() {
        if (self.index < self.elements.length - 1)
          ++self.index
        else
          self.index = 0
        self.preview.src = self.elements[self.index].src
      }
      this.out.onclick = function() {
        this.parentNode.removeChild(self.container)
        this.parentNode.removeChild(this)
      }

      document.body.onkeydown = function(e) {
        if (e.keyCode == '37') {
          self.backward()
        } else if (e.keyCode == '39') {
          self.forward()
        }
      }
      this.next.onclick = function() {
        self.forward()
      }
      this.previous.onclick = function() {
        self.backward()
      }
    }
  }

  window.slider = function(selector) {
    return {
      bindTo: function(selector) {
        if (document.querySelector(selector)) {
          var elements = document.querySelector(selector).parentNode.querySelectorAll('img')
          for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute("data-queue", i)
            elements[i].onclick = function() {
              new slider(elements).init(this.src).events(this.dataset.queue)
            }
          }
        }
      }
    }
  }

})(window, document);
