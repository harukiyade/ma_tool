up-dev:
	docker compose -f compose.yaml -f compose.override.yaml up

up-dev-only-back:
	docker compose -f compose.yaml -f compose.override.yaml up python-app

up-prod:
	docker compose -f compose.yaml up

down:
	docker compose down

build-dev-no-chahe:
	docker compose -f compose.yaml -f compose.override.yaml build --no-cache

build-prod-no-chahe:
	docker compose -f compose.yaml build --no-cache

