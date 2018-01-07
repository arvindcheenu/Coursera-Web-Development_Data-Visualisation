Courses=new Mongo.Collection("courses");
if (Meteor.isClient){
  Template.JSONdata.helpers({
    get_courses : function(){
      var course_status = Courses.findOne();
      if (course_status){
        return JSON.stringify(Courses.findOne({key : 'grades'}).array ,null, 2);
      }
    }
  })
  Template.line_vizjs.helpers({
    init_line_vis : function(){
      var ctx = document.getElementById("canvas");
      var courses=["Data Science","Graphic Design","Machine Learning","An Introduction to Interactive Programming in Python","Responsive Website Basics: Code with HTML, CSS, and JavaScript"]
      var faculty=["Dr James Ohene-Djan","Dr Kate Devlin","Dr Mick Grierson","Dr.Marco Gilles","Dr.Matthew-Yee-King"]
      var subjects=["Computer Science","Data Science","Visual Design","Algorithms","Robotics","Digital Arts"]
      var students=["Arvind Srinivasan","Brian Taylor","Wong To","Alex Mason","Maya Andrew"]
      var course_status = Courses.findOne();
      if (course_status){
        var grades= Courses.findOne({key : 'grades'}).array;
        var raw_data=[]
        for (var i=0; i<courses.length; i++){
          var course_name=courses[i];
          var count_data=[];
          for (var j=0; j<grades.length; j++){
            if (grades[j].course == course_name){
              var gpa_round =Math.floor(grades[j].grade);
              count_data.push(gpa_round);
            }
          }
          raw_data.push({name:course_name, data: count_data});
        }
        var dataset=[];
        var radarata = [];
        for (var k=0; k<raw_data.length; k++){
          var counted_data = [0,0,0,0,0,0,0,0,0,0];
          var course_named = raw_data[k].name;
          var datalist = raw_data[k].data;
          for (var l=0; l<datalist.length; l++){
            data_item=datalist[l];
            counted_data[data_item]+=1;
          }
          radarata.push({name:course_named, data: counted_data});
        }
        var backgroundColor=['rgba(255,195,0,0.2)','rgba(255,87,51,0.2)','rgba(199,0,57,0.2)','rgba(144,12,63,0.2)','rgba(88,24,69,0.2)']
        var pointBackgroundColor=['rgba(255,195,0,1)','rgba(255,87,51,1)','rgba(199,0,57,1)','rgba(144,12,63,1)','rgba(88,24,69,1)']
        for (var x=0; x<radarata.length; x++){
          dataset.push({label:radarata[x].name, backgroundColor:backgroundColor[x],pointBackgroundColor:pointBackgroundColor[x],data:radarata[x].data})
        }
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                datasets: dataset
            },
            options: {
                legend: {
                    position: 'top',
                },
                scales: {
                                    xAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'GPA Score'
                                        }
                                    }],
                                    yAxes: [{
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Number of students'
                                        },
                                    }]
                                },
                title: {
                    display: true,
                    text: 'Course-Wise Grade Point Average'
                }
            }
        });
      }
    }
  })
  Template.radar_vizjs.helpers({
    init_radar_vis : function(){
      var ctx = document.getElementById("canvas2");
      var courses=["Data Science","Graphic Design","Machine Learning","An Introduction to Interactive Programming in Python","Responsive Website Basics: Code with HTML, CSS, and JavaScript"]
      var faculty=["Dr James Ohene-Djan","Dr Kate Devlin","Dr Mick Grierson","Dr.Marco Gilles","Dr.Matthew-Yee-King"]
      var subjects=["Computer Science","Data Science","Visual Design","Algorithms","Robotics","Digital Arts"]
      var students=["Arvind Srinivasan","Brian Taylor","Wong To","Alex Mason","Maya Andrew"]
      var course_status = Courses.findOne();
      if (course_status){
        var grades= Courses.findOne({key : 'grades'}).array;
        var raw_data=[]
        for (var i=0; i<courses.length; i++){
          var course_name=courses[i];
          var count_data=[];
          for (var j=0; j<grades.length; j++){
            if (grades[j].course == course_name){
              var gpa_round =Math.floor(grades[j].grade);
              count_data.push(gpa_round);
            }
          }
          raw_data.push({name:course_name, data: count_data});
        }
        var dataset=[];
        var radarata = [];
        for (var k=0; k<raw_data.length; k++){
          var counted_data = [0,0,0,0,0,0,0,0,0,0];
          var course_named = raw_data[k].name;
          var datalist = raw_data[k].data;
          for (var l=0; l<datalist.length; l++){
            data_item=datalist[l];
            counted_data[data_item]+=1;
          }
          radarata.push({name:course_named, data: counted_data});
        }
        var backgroundColor=['rgba(255,195,0,0.2)','rgba(255,87,51,0.2)','rgba(199,0,57,0.2)','rgba(144,12,63,0.2)','rgba(88,24,69,0.2)']
        var pointBackgroundColor=['rgba(255,195,0,1)','rgba(255,87,51,1)','rgba(199,0,57,1)','rgba(144,12,63,1)','rgba(88,24,69,1)']
        for (var x=0; x<radarata.length; x++){
          dataset.push({label:radarata[x].name, backgroundColor:backgroundColor[x],pointBackgroundColor:pointBackgroundColor[x],data:radarata[x].data})
        }
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                datasets: dataset
            },
            options: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Course-Wise Grade Point Average'
                }
            }
        });
      }
    }
  })
  Template.network_vizjs.helpers({
    init_network_vis : function(){
      var courses=["Data Science","Graphic Design","Machine Learning","An Introduction to Interactive Programming in Python","Responsive Website Basics: Code with HTML, CSS, and JavaScript"]
      var faculty=["Dr James Ohene-Djan","Dr Kate Devlin","Dr Mick Grierson","Dr.Marco Gilles","Dr.Matthew-Yee-King"]
      var subjects=["Computer Science","Data Science","Visual Design","Algorithms","Robotics","Digital Arts"]
      var students=["Arvind Srinivasan","Brian Taylor","Wong To","Alex Mason","Maya Andrew"]
      var course_status = Courses.findOne();
      if (course_status){
        var grades= Courses.findOne({key : 'grades'}).array;
        //=========================================
        // data collection for nodes of the network
        //=========================================
        var nodelist = [];
        var ssr=[];
        for (var i=0; i<students.length; i++){
          var student_name= students[i];
          var subject_list=[];
          for (var j=0; j<grades.length; j++){
            if (student_name == grades[j].student){
              var subject_name = grades[j].subject;
              subject_list.push(subject_name);
            }
          }
          var subject_listing=Array.from(new Set(subject_list));
          ssr.push({name:student_name,list:subject_list});
          var length = subject_listing.length;
          var title_string ="Attended a total of " + length + " subjects, namely <br>"+ subject_listing.splice(0,subject_listing.length-1).join(", ") + '<br> and '+subject_listing[subject_listing.length-1] + '.';
          nodelist.push({id:i+1,shape: 'circularImage',label:student_name,image:student_name +'.jpg',value:length,title:title_string});
          //to display label, label:student_name
        }
        //==============================================
        // data collection for connectors of the network
        //==============================================
        var edgelist = [];
        for (var l = 0; l < students.length; l++) {
         for (var m = l+1; m < students.length; m++) {
                   var stu1 = students[l];
                   var stu2 = students[m];
                   if (ssr[l].name == stu1){
                     var sub1 = _.uniq(ssr[l].list);
                   }
                   if (ssr[m].name == stu2){
                     var sub2 = _.uniq(ssr[m].list);
                   }
                   var common = _.intersection(sub1,sub2);
                   var common_num = common.length;
                   title_strings='Are in touch for '+common_num+' Subject classes.';
                   var color=['rgba(255,195,0,.5)','rgba(255,87,51,.5)','rgba(199,0,57,.5)','rgba(144,12,63,.5)','rgba(88,24,69,.5)']
                   edgelist.push({from: l+1, to: m+1, value: common_num, title:title_strings, color:color[l]});
                 }
            }

    var nodes = new vis.DataSet(nodelist);
    // create an array with edges
    var edges = new vis.DataSet(edgelist);
    // create a network
    var container = document.getElementById('mynetwork');

    //for getting student,subject relationship loop over array and get tuple, (courses[i].student,courses[i].subject)
    // provide the data in the vis format
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      nodes: {
        scaling:{
          label: {
          }
        }
      }
    };
    // initialize your network!
    var network = new vis.Network(container, data, options);
      }
    }
  })

}
