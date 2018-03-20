Page({
  data: {
    picker1Value: 0,
    dateValue: '2018-3'
  },
 
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  }
})