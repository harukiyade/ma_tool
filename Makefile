up:
	docker compose -f compose.yaml up

up-dev:
	docker compose up

up-dev-only-back:
	docker compose up python-app

down:
	docker compose down

build:
	docker compose -f compose.yaml build

build-no-cache:
	docker compose -f compose.yaml build --no-cache

build-dev-no-cache:
	docker compose build --no-cache