FROM tylerlu/demoapp-base:0904

### SSH Server
RUN apt-get update \ 
  && apt-get install -y --no-install-recommends openssh-server \
  && echo "root:Docker!" | chpasswd
COPY sshd_config /etc/ssh/

### Backend
ADD ./Backend /app/Backend
WORKDIR /app/Backend
# RUN apk add --no-cache git
RUN pip install -r requirements.txt

### Frontend
RUN npm install -g @angular/cli
ADD ./Frontend /app/Frontend
WORKDIR /app/Frontend
RUN npm install

### Nginx
RUN pip install uwsgi \
    && mkdir /var/log/uwsgi
COPY backend_uwsgi.ini /app/Backend/uwsgi.ini
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 2222 80 

###startup.sh
WORKDIR /app
COPY startup.sh /opt/
RUN chmod 755 /opt/startup.sh
CMD ["/opt/startup.sh"]