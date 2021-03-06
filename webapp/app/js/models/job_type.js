/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, you can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

treeherder.factory('ThJobTypeModel', [
    '$http', '$log', 'thUrl',
    function($http, $log, thUrl) {

    // ThJobTypeModel is the js counterpart of job_type

    var ThJobTypeModelModel = function(data) {
        // creates a new instance of ThJobTypeModelModel
        // using the provided properties
        angular.extend(this, data);
    };

    ThJobTypeModelModel.get_uri = function(){
        var url = thUrl.getRootUrl("/jobtype/");
        $log.log(url);
        return url;
    };

    ThJobTypeModelModel.get_list = function(options) {
        // a static method to retrieve a list of ThJobTypeModelModel
        options = options || {};
        var query_string = $.param(options);
        return $http.get(ThJobTypeModelModel.get_uri()+"?"+query_string)
            .then(function(response) {
                var item_list = [];
                angular.forEach(response.data, function(elem){
                    item_list.push(new ThJobTypeModelModel(elem));
                });
                return item_list;
        });
    };

    ThJobTypeModelModel.get = function(pk) {
        // a static method to retrieve a single instance of ThJobTypeModelModel
        return $http.get(ThJobTypeModelModel.get_uri()+pk).then(function(response) {
            return new ThJobTypeModelModel(response.data);
        });
    };

    return ThJobTypeModelModel;
}]);
