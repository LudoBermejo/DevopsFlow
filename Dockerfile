FROM centos:6
MAINTAINER Ludo Bermejo <LudoBermejo@gmail.com>, domainer

# Install nodejs repository
RUN curl --silent --location https://rpm.nodesource.com/setup | bash -

# patch the system
RUN yum clean all
RUN yum -y update

# install npm
RUN npm -g install npm@latest-2

# copy files
COPY . /src

# Install app and dependencies
RUN cd /src; npm install

EXPOSE 8080

CMD cd/src && node ./app.js