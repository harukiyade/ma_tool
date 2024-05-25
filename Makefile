up-dev:
	docker compose -f compose.yaml -f compose.override.yaml up

up-prod:
	docker compose -f compose.yaml up

down:
	docker compose down