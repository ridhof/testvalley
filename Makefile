build:
	$(MAKE) check-env
	docker build -t testvalley-web .
run:
	$(MAKE) check-env
	docker run -d -p 3002:3000 --name testvalley-web-service testvalley-web
stop:
	docker stop testvalley-web-service
remove:
	docker rm testvalley-web-service
check-env:
	cat .env.local
