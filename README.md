# Basic PKI-as-a-Service Portal Deployment

Use this template to create your own PKI-as-a-Service deployment.

## Deploy a PKIaaS on localhost

Run

    ./deploy

to assemble artifacts and build docker images.

Run

    docker-compose up

to start database and PKI-as-a-Service.


## Deploying on a remote system

You need to configure a docker context that points to the remote
system and set that in the deploy script.

Remember to set the correct Server URL in etc/configuration.js at which the
server can be reached.

For Internet facing hosts, we strongly recommend to use a Webserver as proxy.


## Installing ant+ivy

The deployment assembles artifacts from https://www.openscdp.org/ivy using
ant as build tools and ivy as dependency management. Both ant and ivy must be
installed on the machine that controls the deployment (i.e. the build system).

On Debian ant and ivy can be installed using

	sudo apt install ant ivy

The ivy module must be made available to ant with a link to the ivy.jar in /usr/share/ant/lib with

	sudo ln -s -t /usr/share/ant/lib /usr/share/java/ivy.jar


## Register the first user

The first user has special priviledges in the system. He initially has all major roles
assigned and thus ultimate control. Usually the first user will then delegate roles to other
users in the system.


## Running without e-mail service

In normal operations, the service will send e-mails using the SMTP server configured in etc/configuration.js.

Unless that is set, you will need to pick the activation code from the logs:

    pkiaas-test     | 69160 [qtp943081537-20] DEBUG pki-as-a-service.processes.RegisterMyTokenRequestModel - ACTIVATION CODE 604226


## Creating your first Trustcenter

See our [blog](https://www.smartcard-hsm.com/2022/05/11/trustcenter-open-beta.html) and
[screencast](https://www.smartcard-hsm.com/2022/05/09/prepare-trustcenter-token.html) how
to create your first trustcenter to manage SmartCard-HSMs, create a PKI, enroll persons
and systems.

