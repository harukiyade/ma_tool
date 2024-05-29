up-dev:
	docker compose up

up-dev-only-back:
	docker compose up python-app

up:
	docker compose -f compose.yaml up

down:
	docker compose down

build-dev-no-cache:
	docker compose build --no-cache

build-prod-no-cache:
	docker compose -f compose.yaml build --no-cache

