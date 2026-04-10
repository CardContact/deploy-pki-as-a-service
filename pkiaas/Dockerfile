FROM debian:13-slim

ENV BASE /usr/share/pkiaas
ENV USER pkiaas

RUN set xe && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    openjdk-21-jre-headless \
    && \
    rm -rf /var/lib/apt/lists/* && \
    groupadd -r -g 900 $USER && useradd -r -g $USER -u 900 -d $BASE $USER

WORKDIR $BASE

COPY . .

RUN mkdir h2
RUN chown -R $USER:$USER "$BASE";

USER $USER

EXPOSE 8080 8088

CMD [ "./scriptingserver" ]
