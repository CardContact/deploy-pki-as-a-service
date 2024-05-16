FROM debian:12

ENV PAAS_BASE /usr/share/pkiaas
ENV USER pkiaas

RUN set xe; \
    apt-get update ; \
    apt-get install -y --no-install-recommends \
    openjdk-17-jre-headless \
    ; \
    rm -rf /var/lib/apt/lists/* ; \
    groupadd -r $USER && useradd -r -g $USER -d $PAAS_BASE $USER

WORKDIR $PAAS_BASE

COPY . .

RUN mkdir h2
RUN chown -R $USER:$USER "$PAAS_BASE";

USER $USER

EXPOSE 8080 8088

CMD [ "./scriptingserver" ]
