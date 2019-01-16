export class Dog {
    getDogImages(name) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://dog.ceo/api/breed/${name}/images/random`;
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

    getRandomDogImages() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = "https://dog.ceo/api/breeds/image/random";
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

    getDogBreedList() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = "https://dog.ceo/api/breeds/list/all";
            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }
}