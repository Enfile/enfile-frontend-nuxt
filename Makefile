build:
	docker-compose build
	docker-compose run app yarn install

up:
	docker-compose up -d
	docker-compose exec app yarn dev

down:
	docker-compose down

lint:
	docker-compose run front yarn lint

test:
	docker-compose run front yarn test

