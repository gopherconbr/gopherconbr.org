+++
author = ["Brian Ketelsen"]
date = "2015-03-21T16:03:09-04:00"
linktitle = "Rob Pike"
title = "Rob Pike"
talk = "The Design of the Go Assembler"
speakerimage = "/2016/img/speakers/rob_pike.jpg"
speaker = "rpike"
sessionscheduled = "July 12th"
sessiontime = "11:20am - 11:50am"
+++

The Go assembler was rewritten for the 1.5 release, replacing a suite of C programs, one per architecture, with a single binary, written in Go, that supports all architectures.

The usual variables, GOOS and GOARCH, are sufficient to configure it for any environment.

This talk will explain how this extreme portability is achieved for such a non-portable problem.

The answer lies in the structure and origin of the Go compilation tool chain, a mostly machine-independent input language, and a lot of automation.

Even for non-assembling Gophers, there are lessons in the design.
