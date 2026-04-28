FROM debian:13-slim

ENV BASE /usr/share/pkiaas-service
ENV USER pkiaas-service

RUN set xe && \
    apt update && \
    apt install -y --no-install-recommends \
    openjdk-21-jre-headless ant ivy && \
    ln -s -t /usr/share/ant/lib /usr/share/java/ivy.jar && \
    rm -rf /var/lib/apt/lists/* && \
    groupadd -r -g 900 $USER && useradd -r -g $USER -u 900 -d $BASE $USER

WORKDIR $BASE

COPY . .

RUN ant -Dunpack-fs=1 resolve && \
    tar xzf pki-as-a-service-backend.tgz --strip-components=1 && \
    rm pki-as-a-service-backend.tgz && \
    chmod +x start-service && \
    chown -R $USER:$USER "$BASE"

USER $USER

CMD [ "./start-service" ]
