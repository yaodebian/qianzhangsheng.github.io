var storage = window.localStorage;
var detail = {
    'author': 'isaac',
    'description': 'fresheggs',
    'ration': 100
};
storage.setItem('details', JSON.stringify(detail));
details = JSON.parse(storage.getItem('details'));