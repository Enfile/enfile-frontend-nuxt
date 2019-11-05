build:
	docker-compose build
	docker-compose run app yarn install

up:
	docker-compose run app yarn dev

down:
	docker-compose down

lint:
	docker-compose run front yarn lint

test:
	docker-compose run front yarn test
