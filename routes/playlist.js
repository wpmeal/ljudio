const { Router } = require('express');
const router = new Router();

const { createPlaylistCont, addToPlaylistCont, browseUserPlaylistsCont, 
    fetchPlaylistContentCont, deleteFromPlaylist, deletePlaylist, sharePlaylistCont, fetchSharedPlaylistContentCont } = require('../controller/playlistControl.js');
const { user } = require('../middleware/auth.js');


// a route for create a new playlist
router.post('/create_playlist', user, createPlaylistCont);

// a route for add media to the playlist
router.post('/add_to_playlist', user, addToPlaylistCont);

// a route for browse a user's playlists
router.get('/browse_playlists', user, browseUserPlaylistsCont);

// a route for fetching a user's playlist content
router.get('/fetch_playlist/:id', user, fetchPlaylistContentCont);

// a route for delete a song/media from playlist content
router.get('/delete_from_playlist/playlist/:playlistId/contentid/:contentId', user, deleteFromPlaylist);

// a route for the whole playlist 
router.get('/delete_playlist/:playlistId/', user, deletePlaylist);

// share a playlist 
router.get('/share_playlist/:id/', user, sharePlaylistCont);

// fetch a playlist content
router.get('/fetch_shared_playlist/:code/', fetchSharedPlaylistContentCont);

module.exports = router;