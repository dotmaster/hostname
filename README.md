Hostname: A simple utility for getting the hostname of your machine, even prior to the os module introduced in node 0.4
============================================

This module is a simple utility for getting the hostname of your current machine. 

## Why?

Cause prior to node 00.4 there was no way to get the hostname.

## How to use

To install and run do the following

  git clone https://github.com/dotmaster/hostname
or
  npm install hostname

### Implementing it on your project

In Javascript:

     var hostname = require('path/to/hostname'),
 
     //then somewhere in your code
 
     hostname.hostname();


## Credits

- Gregor Schwab &lt;greg@synaptic-labs.net&gt; ([dotmaster](http://github.com/dotmaster))

## License 

(The MIT License)

Copyright (c) 2011 Gregor Schwab &lt;dev@synaptic-labs.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
