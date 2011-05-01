JSER: A Simple Webserver in node.js
===

nothing really here yet, lots to do.

For things to do, see TODO. As it says, if we every finish the TODO list, there will be cake. While eating the cake, I will think of more things to do. Contributers may have some, but they have to come to my flat in London to claim it.

VERSIONS:
=

0.0.X - I fixed something broken. moar coffee. should only ever make headaches go away for end users.
0.X.0 - new featureset, cake was had. may involve updating of config files (which I can probably automate) or dependent modules (which I probably can't).
X.0.0 - champagne, baloons, new website branding. possibly a LAN party.

note that X may extend beyond 9, because I am a massichist and am not made of balloon money.

THIS VERSION:
=

Things to do before we release "version 0.1" include:

* actually having unit tests.
* having a config file, allowing users/sysadmins to specify
  * a port,
  * a web root.
* checking to see if the requested file relative to the web root exists, and
* actually returning it instead of hello world.
* returning proper 404s if the file doesn't exist.

*at this point I may release the thing on npm as it is actually more than the example on the nodejs.org homepage.*

* figure out testing for virtual hosts.
* add multiple hosts structure to the config file.
* make sure we dive off to the correct web root for the correct vhost request.
* add support for running node.js web applications via something like index.js
* add support for vhost/global smart url bypassing of the FS and just running index.js all the time.
