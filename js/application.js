MyApp = new Backbone.Marionette.Application();
MyApp.addRegions({
	navRegion: "#nav",
	contentRegion: "#content"
});

MyApp.addInitializer(function (options) {
	MyApp.navRegion.show(new NavView());
	MyApp.contentRegion.show(new ContentHomeView());
});

$(document).ready(function () {
	loadTemplate(["nav", "content_home", "content_program", "content_submission",  "content_posters",  "content_transport", "content_photos", "content_registration", "content_keynote", "content_eventposter", "content_panel"], function () {
		MyApp.start();
		this.router = new ApplicationRouter();
		Backbone.history.start();
	});
});