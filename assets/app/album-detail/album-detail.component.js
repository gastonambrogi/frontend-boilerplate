angular.module('app-devsar')
.component('albumDetail', {
  templateUrl: 'assets/app/album-detail/album-detail.template.html',
  controller: ['$routeParams', '$http', function AlbumDetailController($routeParams, $http) {
    let self = this;
    this.albumId = $routeParams.albumId;
    $http.get(`/api/v1/albums/${this.albumId}/`).then((response) => self.album = response.data);
  }]
})
