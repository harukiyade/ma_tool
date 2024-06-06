# Use a Debian-based image for better compatibility with development tools
FROM node:22-bullseye

# Set the working directory
WORKDIR /workspace

# Install necessary packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    make \
    docker.io \
    python3 \
    python3-pip \
    git && \
    rm -rf /var/lib/apt/lists/*

# Ensure npm and pip are available
RUN npm install -g npm && \
    pip install --upgrade pip

# Keep the container running
CMD ["sh", "-c", "while sleep 1000; do :; done"]