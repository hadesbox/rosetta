# Rosetta

This is a Firefox plugin that translates ugly addresses like http://ip-X-Y-Z-W.eu-west-1.compute.internal:20888/proxy/application_1472736105611_0004/ to http://X.Y.Z.W:20888/proxy/application_1472736105611_0004/.

Why?

Its anoying when you have to surf you EMRs clusters that the you get private dns directly from the AWS EMR console, but not the private (or public) IP, so this eases you the manual edition if you dns don't resolve this IPs.

How it works?

Well this plugin will simply try to parse *.compute.internal IP addresess and form the corresponding IP with the full path, port and protocol.

Development

The thruth is that this was an experiment to both learn to make a simple Firefox plugin and a tool its actually handy for my self (and hopefully others).

If you want to build the plugin your self you need to have installed nodejs, npm and jpm.

To run it simply

```
$ jpm run -b /usr/bin/firefox-developer 

```
I had to use firefox-developer, since the release 48 of firefox it wont accept UNSIGNED add-ons.

To create the xpi (add-on package) and have it sign it you have to simply

```
$ jpm sign --api-key user:XXXXX:XXX --api-secret YYYYYYYYYYYYYYYYYYYYYYYYYYY

```