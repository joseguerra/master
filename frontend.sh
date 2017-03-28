#!/bin/sh

### BEGIN INIT INFO
# Provides:          root
# Required-Start:    $local_fs $remote_fs $network
# Required-Stop:     $local_fs $remote_fs $network
# Should-Start:      $named
# Should-Stop:       $named
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start Tomcat YOUR_APP_NAME.
# Description:       Start the Tomcat YOUR_APP_NAME servlet engine.
### END INIT INFO

SERVICE_NAME=ctrl-prod-front
PATH_TO_JAR=/home/calvarado/proyectos/ctrl-prod/frontend/ctrl-prod.linux
OPTS="-Xmx256m"
PID_PATH_NAME=/home/calvarado/proyectos/ctrl-prod/frontend/ctrl-prod-front-pid
case $1 in
    start)
        echo "Starting $SERVICE_NAME ...port:8083"
        if [ ! -f $PID_PATH_NAME ]; then
            cd /home/calvarado/proyectos/ctrl-prod/frontend
            nohup python -m SimpleHTTPServer 8083 /tmp 2>> /dev/null >> /dev/null &
                        echo $! > $PID_PATH_NAME
            echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is already running ..."
        fi
    ;;
    stop)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stoping ..."
            kill $PID;
            echo "$SERVICE_NAME stopped ..."
            rm $PID_PATH_NAME
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
    restart)
        if [ -f $PID_PATH_NAME ]; then
            PID=$(cat $PID_PATH_NAME);
            echo "$SERVICE_NAME stopping ...";
            kill $PID;
            echo "$SERVICE_NAME stopped ...";
            rm $PID_PATH_NAME
            echo "$SERVICE_NAME starting ..."
            nohup java -jar $PATH_TO_JAR /tmp 2>> /dev/null >> /dev/null &
                        echo $! > $PID_PATH_NAME
            echo "$SERVICE_NAME started ..."
        else
            echo "$SERVICE_NAME is not running ..."
        fi
    ;;
esac
