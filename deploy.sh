echo "Building Static Site"
# gatsby build

echo "Connecting to EC2 instance"
eval $(docker-machine env timwhite.ninja)

echo "Building Docker Image"
# docker build -t timwhite_ninja .

echo "Killing Existing Site"
docker stop $(docker ps -aq)

echo "Deploying new Image to EC2"
docker run --rm -d -p 80:80 timwhite_ninja
