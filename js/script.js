
$(function () {
  var currentDay = $('#currentDay');
  var scheduleContainer = $('.container-fluid');

  var scheduleBlock = [
    {
      id: "hour-9",
      hour: "9AM",

    },
    {
      id: "hour-10",
      hour: "10AM",

    },
    {
      id: "hour-11",
      hour: "11AM",

    },
    {
      id: "hour-12",
      hour: "12PM",

    },
    {
      id: "hour-13",
      hour: "1PM",

    },
    {
      id: "hour-14",
      hour: "2PM",

    },
    {
      id: "hour-15",
      hour: "3PM",

    },
    {
      id: "hour-16",
      hour: "4PM",

    },
    {
      id: "hour-17",
      hour: "5PM",

    },
  ]

  var scheduleBlockSet = function () {
    for (var i = 0; i < scheduleBlock.length; i++) {
      var hourContainer = document.createElement('div');
      var hourText = document.createElement('div');
      var scheduleInput = document.createElement('textarea');
      var submitbtn = document.createElement('button');
      var iElement = document.createElement('i');

      hourContainer.setAttribute('class', 'row time-block');
      hourContainer.setAttribute('id', scheduleBlock[i].id);

      hourText.setAttribute('class', 'col-2 col-md-1 hour text-center py-3');
      hourText.textContent = scheduleBlock[i].hour;

      scheduleInput.setAttribute('class', 'col-8 col-md-10 description');
      scheduleInput.setAttribute('rows', '3');
      scheduleInput.value = localStorage.getItem(scheduleBlock[i].hour);

      submitbtn.setAttribute('class', 'btn saveBtn col-2 col-md-1');
      submitbtn.setAttribute('aria-label', 'save');

      iElement.setAttribute('class', 'fas fa-save');
      iElement.setAttribute('aria-hidden', 'true');

      scheduleContainer.append(hourContainer);
      hourContainer.append(hourText, scheduleInput, submitbtn);
      submitbtn.append(iElement);

    }

  }


  var judgeTime = function () {
    var currentTime = dayjs().format("hA").toString();
    var currentHour = dayjs().format("H");
    var timeBlocks = $('.time-block');

    var textarea9 = $('#hour-9').children('textarea');
    var textarea10 = $('#hour-10').children('textarea');
    var textarea11 = $('#hour-11').children('textarea');
    var textarea12 = $('#hour-12').children('textarea');
    var textarea13 = $('#hour-13').children('textarea');
    var textarea14 = $('#hour-14').children('textarea');
    var textarea15 = $('#hour-15').children('textarea');
    var textarea16 = $('#hour-16').children('textarea');
    var textarea17 = $('#hour-17').children('textarea');

    var timeBlock9 = $('#hour-9');
    var timeBlock10 = $('#hour-10');
    var timeBlock11 = $('#hour-11');
    var timeBlock12 = $('#hour-12');
    var timeBlock13 = $('#hour-13');
    var timeBlock14 = $('#hour-14');
    var timeBlock15 = $('#hour-15');
    var timeBlock16 = $('#hour-16');
    var timeBlock17 = $('#hour-17');

    var onCurrentHour = function (textareaNum, hourBlock) {
      textareaNum.focus();
      textareaNum.attr("placeholder", "Current hour");
      hourBlock.addClass('present');
    }
    var addPastClass = function (hourBlock) {
      hourBlock.addClass('past');
    }
    var addFutureClass = function (hourBlock) {
      hourBlock.addClass('future');
    }

    if (currentTime === scheduleBlock[0].hour) {
      onCurrentHour(textarea9, timeBlock9);
      addFutureClass(timeBlock10);
      addFutureClass(timeBlock11);
      addFutureClass(timeBlock12);
      addFutureClass(timeBlock13);
      addFutureClass(timeBlock14);
      addFutureClass(timeBlock15);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[1].hour) {
      onCurrentHour(textarea10, timeBlock10);
      addPastClass(timeBlock9);
      addFutureClass(timeBlock11);
      addFutureClass(timeBlock12);
      addFutureClass(timeBlock13);
      addFutureClass(timeBlock14);
      addFutureClass(timeBlock15);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[2].hour) {
      onCurrentHour(textarea11, timeBlock11);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addFutureClass(timeBlock12);
      addFutureClass(timeBlock13);
      addFutureClass(timeBlock14);
      addFutureClass(timeBlock15);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[3].hour) {
      onCurrentHour(textarea12, timeBlock12);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addPastClass(timeBlock11);
      addFutureClass(timeBlock13);
      addFutureClass(timeBlock14);
      addFutureClass(timeBlock15);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[4].hour) {
      onCurrentHour(textarea13, timeBlock13);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addPastClass(timeBlock11);
      addPastClass(timeBlock12);
      addFutureClass(timeBlock14);
      addFutureClass(timeBlock15);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[5].hour) {
      onCurrentHour(textarea14, timeBlock14);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addPastClass(timeBlock11);
      addPastClass(timeBlock12);
      addPastClass(timeBlock13);
      addFutureClass(timeBlock15);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[6].hour) {
      onCurrentHour(textarea15, timeBlock15);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addPastClass(timeBlock11);
      addPastClass(timeBlock12);
      addPastClass(timeBlock13);
      addPastClass(timeBlock14);
      addFutureClass(timeBlock16);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[7].hour) {
      onCurrentHour(textarea16, timeBlock16);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addPastClass(timeBlock11);
      addPastClass(timeBlock12);
      addPastClass(timeBlock13);
      addPastClass(timeBlock14);
      addPastClass(timeBlock15);
      addFutureClass(timeBlock17);

    } else if (currentTime === scheduleBlock[8].hour) {
      onCurrentHour(textarea17, timeBlock17);
      addPastClass(timeBlock9);
      addPastClass(timeBlock10);
      addPastClass(timeBlock11);
      addPastClass(timeBlock12);
      addPastClass(timeBlock13);
      addPastClass(timeBlock14);
      addPastClass(timeBlock15);
      addPastClass(timeBlock16);
    } else if (currentHour >= 18) {
      addPastClass(timeBlocks);
    }
    else if (currentHour >= 0) {
      addFutureClass(timeBlocks);
    }
    timeBlocks.on("click", ".saveBtn", handleInputSchedule);
  }

  var handleInputSchedule = function (event) {

    var scheduleInputBlock = [
      {
        scheduleText: '9AM',
        textArea: $('#hour-9').children('textarea'),
        defaText: "",
        btn: $('#hour-9').children('button'),
      },
      {
        scheduleText: '10AM',
        textArea: $('#hour-10').children('textarea'),
        defaText: "",
        btn: $('#hour-10').children('button'),
      },
      {
        scheduleText: '11AM',
        textArea: $('#hour-11').children('textarea'),
        defaText: "",
        btn: $('#hour-11').children('button'),
      },
      {
        scheduleText: '12PM',
        textArea: $('#hour-12').children('textarea'),
        defaText: "",
        btn: $('#hour-12').children('button'),
      },
      {
        scheduleText: '1PM',
        textArea: $('#hour-13').children('textarea'),
        defaText: "",
        btn: $('#hour-13').children('button'),
      },
      {
        scheduleText: '2PM',
        textArea: $('#hour-14').children('textarea'),
        defaText: "",
        btn: $('#hour-14').children('button'),
      },
      {
        scheduleText: '3PM',
        textArea: $('#hour-15').children('textarea'),
        defaText: "",
        btn: $('#hour-15').children('button'),
      },
      {
        scheduleText: '4PM',
        textArea: $('#hour-16').children('textarea'),
        defaText: "",
        btn: $('#hour-16').children('button'),
      },
      {
        scheduleText: '5PM',
        textArea: $('#hour-17').children('textarea'),
        defaText: "",
        btn: $('#hour-17').children('button'),
      },

    ]
    var target = $(event.target);

    for (var i = 0; i < scheduleInputBlock.length; i++) {
      if (target.is(scheduleInputBlock[i].btn)) {
        var textAreaBlock = scheduleInputBlock[i].defaText += scheduleInputBlock[i].textArea.val();
        localStorage.setItem(scheduleInputBlock[i].scheduleText, textAreaBlock);
      }

    }

  }

  var textCurrentDay = function () {
    var setCurrentDay = dayjs().format("dddd, MMM D, YYYY");
    currentDay.text(setCurrentDay);

  }

  scheduleBlockSet();
  judgeTime();
  textCurrentDay();

});
