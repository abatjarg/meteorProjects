CalEvents = new Meteor.Collection('calevents');
Session.setDefault('editing_calevent', null);
Session.setDefault('showEditEvent', false);
Meteor.Router.add({
  '/' : 'homepage',
  '/calendar': 'calendar'
})

Template.calendar.rendered = function(){
  $('#calendar').fullCalendar({
    dayClick:function(date, allDay, jsEvent, view){

    },
    eventClick:function(calEvent, jsEvent, view){

    },
    events:function(start, end, callback){
      var events = [];
      callEvents = CalEvents.find();
      calEvent.forEach(function(evt){
        events.push({
          id:evt._id,
          title: evt.title,
          start: evt.start,
          end: evt.end
        })
      })
      callback(events);
    },
  });
}