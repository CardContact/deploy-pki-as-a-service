FROM debian:13-slim

ENV BASE /usr/share/pkiaas-service
ENV USER pkiaas-service

RUN set -e && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    openjdk-21-jre-headless \
    && \
    rm -rf /var/lib/apt/lists/* && \
    groupadd -r -g 900 $USER && useradd -r -g $USER -u 900 -d $BASE $USER

WORKDIR $BASE

COPY . .

USER $USER

CMD [ "./start-service" ]
