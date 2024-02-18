import React from 'react';
import ReactDOM from 'react-dom/client';
import {data1, data2, data3} from './../../data';
import DataFrame from 'dataframe-js';
import {pie_chart,bar_chart,line_chart,stack_chart} from './../../uml';
import './analytics.css';    
  class Analytics extends React.Component {
    Json1='Travelers.json';
    Json2='Community.json';
    Json3='Finance.json';    
    jsonFileInput = React.createRef();
    DataTable = React.createRef();
    charts = React.createRef();
    myDiv = React.createRef();
    Filter = React.createRef();
    Filter_cond = React.createRef();
    Filter_number = React.createRef();
    Refresh() {
        window.parent.location = window.parent.location.href;
    }
    myFunction() {
        var file_name = this.jsonFileInput.current.files[0].name;
        if(file_name === this.Json1)
        {
            var myBooks = data1;
            var col = [];
            for (var i = 0; i < myBooks.length; i++) {
                for (var key in myBooks[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            var table = document.createElement("table");  
            table.style.width = "1085px";  
            var tr = table.insertRow(-1);                   // TABLE ROW.
    
            for (var j = 0; j < col.length; j++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[j];
                tr.appendChild(th);
            }
    
            for (var k = 0; k < myBooks.length; k++) {    
                tr = table.insertRow(-1);    
                for (var m = 0; m < col.length; m++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = myBooks[k][col[m]];
                }
            }
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            //var divContainer = document.getElementById("DataTable");
            var divContainer = this.DataTable.current;
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
    
            var charts_new = ['Pie Chart','Bar Chart','Line Chart','Stack Chart'];
            //var myDiv_charts = document.getElementById("charts");
            var myDiv_charts = this.charts.current;
            for(var r=0;r<charts_new.length;r++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(charts_new[r]);
            var checkbox = document.createElement("input");
    
            checkbox.type = "checkbox"; 
            checkbox.id = "test";  // make the element a checkbox
            checkbox.name = charts_new[r];      // give it a name we can check on the server side
            checkbox.value = charts_new[r];         // make its value "pair"
    
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
    
            // add the label element to your div
            myDiv_charts.appendChild(label); }
    
            DataFrame.fromJSON(this.Json1, true).then(
            df => {
    
            var f = df.listColumns();
    
            df.show(20);
    
            //var myDiv = document.getElementById("myDiv");
            var myDiv = this.myDiv.current;
    
            for(var k=0;k<f.length;k++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(f[k]);
            var checkbox = document.createElement("input");
    
            checkbox.type = "checkbox"; 
            checkbox.id = "col";    
            checkbox.name = f[k];      
            checkbox.value = f[k];         
    
            label.appendChild(checkbox);   
            label.appendChild(description);// add the description to the element
    
            
            myDiv.appendChild(label); }
    
            });
        }
        else if(file_name === this.Json2)
        {
    
          var myBooks = data2; 
            var col = [];
            for (var i = 0; i < myBooks.length; i++) {
                for (var key in myBooks[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            var table = document.createElement("table");
            table.style.width = "1085px";
    
            var tr = table.insertRow(-1);                   // TABLE ROW.
    
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
    
            for (var i = 0; i < myBooks.length; i++) {
    
                tr = table.insertRow(-1);
    
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = myBooks[i][col[j]];
                }
            }
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            //var divContainer = document.getElementById("DataTable");
            var divContainer = this.DataTable.current;
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
    
            var charts_new = ['Pie Chart','Bar Chart','Line Chart','Stack Chart'];
            //var myDiv_charts = document.getElementById("charts");
            var myDiv_charts = this.charts.current;
            for(var r=0;r<charts_new.length;r++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(charts_new[r]);
            var checkbox = document.createElement("input");
    
            checkbox.type = "checkbox"; 
            checkbox.id = "test";   // make the element a checkbox
            checkbox.name = charts_new[r];      // give it a name we can check on the server side
            checkbox.value = charts_new[r];         // make its value "pair"
    
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
    
            // add the label element to your div
            myDiv_charts.appendChild(label); }
    
    
          //console.log("111111");
          DataFrame.fromJSON(this.Json2).then(
            df => {
    
              var f = df.listColumns();
    
            df.show(5);
    
            //var myDiv = document.getElementById("myDiv");
            var myDiv = this.myDiv.current;
            for(var k=0;k<f.length;k++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(f[k]);
            var checkbox = document.createElement("input");
    
            checkbox.type = "checkbox";
            checkbox.id = "col";    // make the element a checkbox
            checkbox.name = f[k];      // give it a name we can check on the server side
            checkbox.value = f[k];         // make its value "pair"
    
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
    
            // add the label element to your div
            myDiv.appendChild(label); }
    
            });
        }else
        {
    
          var myBooks = data3; 
            var col = [];
            for (var i = 0; i < myBooks.length; i++) {
                for (var key in myBooks[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }
            var table = document.createElement("table");
            table.style.width = "1085px";
    
            var tr = table.insertRow(-1);                   // TABLE ROW.
    
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");      // TABLE HEADER.
                th.innerHTML = col[i];
                tr.appendChild(th);
            }
    
            for (var i = 0; i < myBooks.length; i++) {
    
                tr = table.insertRow(-1);
    
                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = myBooks[i][col[j]];
                }
            }
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            //var divContainer = document.getElementById("DataTable");
            var divContainer = this.DataTable.current;
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
    
            var charts_new = ['Pie Chart','Bar Chart','Line Chart','Stack Chart'];
            //var myDiv_charts = document.getElementById("charts");
            var myDiv_charts = this.charts.current;
            for(var r=0;r<charts_new.length;r++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(charts_new[r]);
            var checkbox = document.createElement("input");
    
            checkbox.type = "checkbox";  
            checkbox.id = "test";  // make the element a checkbox
            checkbox.name = charts_new[r];      // give it a name we can check on the server side
            checkbox.value = charts_new[r];         // make its value "pair"
    
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
    
            // add the label element to your div
            myDiv_charts.appendChild(label); }
    
    
          //console.log("22222222");
          DataFrame.fromJSON(this.Json3).then(
            df => {
    
              var f = df.listColumns();
    
            //df.show(5);
    
            //var myDiv = document.getElementById("myDiv");
            var myDiv = this.myDiv.current;
            for(var k=0;k<f.length;k++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(f[k]);
            var checkbox = document.createElement("input");
    
            checkbox.type = "checkbox";
            checkbox.id = "col";    // make the element a checkbox
            checkbox.name = f[k];      // give it a name we can check on the server side
            checkbox.value = f[k];         // make its value "pair"
    
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
    
            // add the label element to your div
            myDiv.appendChild(label); }
    
            });
        } 
      }
    
      getSelectedChbox() {

        var colbox = [];
        var selchbox = [];

        var inp = document.querySelectorAll("[id='col']");
        var nr_inp = inp.length;

        // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
        for(var j=0; j<nr_inp; j++) {
            if(inp[j].type === 'checkbox' && inp[j].checked === true) colbox.push(inp[j].value);
        }

        //console.log("****");
        console.log(colbox);
        //console.log("****");
        
        var inpfields = document.querySelectorAll("[id='test']");   //document.getElementsByClassName("test");
        var nr_inpfields = inpfields.length;

        // traverse the inpfields elements, and adds the value of selected (checked) checkbox in selchbox
        for(var i=0; i<nr_inpfields; i++) {
            if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);
        }

        //var DataFrame = dfjs.DataFrame;
        //var file_name= document.getElementById("jsonFileInput").files[0].name;
        var file_name= this.jsonFileInput.current.files[0].name;
        if(file_name == this.Json1)
        {
      
        DataFrame.fromJSON(this.Json1, true).then(
        df => {

                //df = null;
                var new_col_df = df.restructure(colbox);
                console.log(new_col_df.show());

                var val_s =[];
                var val_n =[];

                for(var g=0;g<colbox.length;g++){
                var dis = df.distinct(colbox[g])
                var arrc = dis.toArray();
                for (var s of arrc) {
                    for (var v of s) {
                        if(typeof(v) === 'string')
                        {
                            val_s.push(v);
                        }
                        else
                        {val_n.push(v);}
                    }
                }
            }

            console.log(val_s);
            console.log(val_n); 

        var selected_data_string= [];
        var selected_data_number= [];
        var myMap1 = new Map();
        var myMap2 = new Map();

        //[1, 2, 3].includes(2)

        for(var g=0;g<colbox.length;g++)
        {
            console.log(colbox[g]);
            var t = df.toArray(colbox[g]);
            for (var q of t) {
                if(typeof(q) === 'string')
                {
                    selected_data_string.push(t);
                    break;
                }
                else
                {
                   selected_data_number.push(t);
                   break; 
                }
            }
        }

        console.log(selected_data_string);
        console.log(selected_data_number);

        if(val_s.length > 0){

        var v = selected_data_string[0];
        for(var e=1;e<selected_data_string.length;e++)
        {
        Array.prototype.push.apply(v, selected_data_string[e]);
        }


        //var mySet2 = new Set(v);
        //console.log(mySet2);

        for(var j=0;j<v.length;j++)
            {
                if(myMap1.has(v[j]))
                {
                    myMap1.set(v[j],myMap1.get(v[j]) + 1);
                }
                else
                {
                var initalize = 1;
                myMap1.set(v[j],initalize);  
                }
            }

            console.log(myMap1);

            var fil = document.querySelectorAll("[id='fil']");   //document.getElementsByClassName("test");
            var nr_fil = fil.length;

            var filter_check=[];

            for(var j=0; j<nr_fil; j++) {
            if(fil[j].type == 'checkbox' && fil[j].checked == true) filter_check.push(fil[j].value);
            }

            //console.log(filter_check);

            for(var q=0;q<filter_check.length;q++)
            {
                myMap1.delete(filter_check[q]);
            }

            console.log(myMap1);

        }

        if(val_n.length > 0){

        var n = selected_data_number[0];
        for(var e=1;e<selected_data_string.length;e++)
        {
        Array.prototype.push.apply(n, selected_data_number[e]);
        }
            
            for(var j=0;j<n.length;j++)
            {
                if(myMap2.has(n[j]))
                {
                    myMap2.set(n[j],myMap2.get(n[j]) + 1);
                }
                else
                {
                var initalize = 1;
                myMap2.set(n[j],initalize);  
                }
            }

            console.log(myMap2);

            //var con1 = document.querySelectorAll("[id='cond_num']");   //document.getElementsByClassName("test");
            //var nr_con1 = con1.length;

            var fil1 = document.querySelectorAll("[id='fil_num']");
            //console.log(fil1);
            var nr_fil1 = fil1.length;

            var filter_check_num=[];

            for(var j=0; j<nr_fil1; j++) {
            if(fil1[j].type == 'radio' && fil1[j].checked == true) filter_check_num.push(fil1[j].value);
            }

            var arr_ke = new Array();
            for(var [key, value] of myMap2.entries())
            {
                arr_ke.push(key);
            }

            function isGreater(value) {
                var co = document.querySelector('input[name="fil_num"]:checked').value;
            return value >= co
            }

            function isLower(value) {
                var co1 = document.querySelector('input[name="fil_num"]:checked').value;
            return value <= co1
            }


            if(document.querySelector('input[name="cond_num"]:checked'))
            {
            var cond_variable = document.querySelector('input[name="cond_num"]:checked').value;
            //console.log(cond_variable);

            var filtered_high;
            var filtered_low;
            if(cond_variable == "Greater than Equal to")
            {
                console.log("High");
                filtered_high = arr_ke.filter(isGreater);
                console.log(filtered_high);
                for(var i=0;i<filtered_high.length;i++)
                {
                    myMap2.delete(parseInt(filtered_high[i]));
                }


            }else if(cond_variable == "Less than Equal to")
            {
                console.log("Low");
                filtered_low = arr_ke.filter(isLower);
                console.log(filtered_low);
                for(var i=0;i<filtered_low.length;i++)
                {
                    console.log(filtered_low[i]);
                    myMap2.delete(parseInt(filtered_low[i]));
                }
            }
            else
            {
                console.log("Equal");
                var eq1 = document.querySelector('input[name="fil_num"]:checked').value;
                myMap2.delete(parseInt(eq1));
            }
            
            //console.log(arr_ke);
            console.log(myMap2);
        }


    }

            var merged = new Map([...myMap1, ...myMap2])
            console.log(merged);

            var labels=[];
            var data_points=[];
            for (var [key, value] of merged.entries()) {
                labels.push(key);
                data_points.push(value);
            }

            
            for(var y=0;y<selchbox.length;y++)
            {
            if(selchbox[y] == 'Pie Chart')
            {
                console.log(labels);
				console.log(myMap2);
                var chart_pie = new pie_chart(labels,data_points,document.getElementById("chart-area1").getContext("2d"));
                chart_pie.create_settings();
				chart_pie.drawChart();
            }
            else if(selchbox[y] == 'Bar Chart')
            {
                //console.log("2");
                var chart_bar = new bar_chart(labels,data_points,document.getElementById("chart-area2").getContext("2d"));
                chart_bar.create_settings();
				const root = ReactDOM.createRoot(document.getElementById('chart-area2')); 
                root.render(chart_bar.drawChart());
								
            }
            else if(selchbox[y] == 'Line Chart')
            {
                var chart_line = new line_chart(labels,data_points,document.getElementById("chart-area3").getContext("2d"));
                chart_line.create_settings();
                const root = ReactDOM.createRoot(document.getElementById('chart-area3')); 
                root.render(chart_line.drawChart());
                
            }
            else if(selchbox[y] == 'Stack Chart')
            {

                var lab=[];
                var unq = df.unique(colbox[0]);
                var fl = unq.toArray();
                for (var s of fl) {
                    for (var v of s) {
                        {
                            lab.push(v);
                        }
                    }
                }

                console.log(lab);

                var lab_y=[];
                var unq_y = df.unique(colbox[1]);
                var fl_y = unq_y.toArray();
                for (var s of fl_y) {
                    for (var v of s) {
                        {
                            lab_y.push(v);
                        }
                    }
                }

                console.log(lab_y);

                var allcount=[];
                var ds1=[];
                var ds2=[];
                
                var res = df.restructure(colbox);
                for(var i of lab) {
                    for(var j of lab_y)
                    {
                        var ele = res.where({'Class': i,'Gender': j});
                        var co = ele.count();
                        allcount.push(co);
                    }
                }


                for(var k=0;k<allcount.length;k++)
                {
                    if(k%2 == 0)
                    {
                        ds1.push(allcount[k]);
                    }
                    else
                    { 
                        ds2.push(allcount[k])
                    }

                }

                var selected_data=[];
                
                selected_data.push(ds1);
                selected_data.push(ds2);

                var chart_stack = new stack_chart(lab,selected_data,document.getElementById("chart-area4").getContext("2d"));
                chart_stack.create_settings();
				const root = ReactDOM.createRoot(document.getElementById('chart-area4')); 
                root.render(chart_stack.drawChart());
            }
        }   

        });
    }
    else if(file_name == this.Json2)
    {
      
        DataFrame.fromJSON(this.Json2, true, true).then(
            df => {

            var new_col_df = df.restructure(colbox);
                console.log(new_col_df.show());

                var val_s =[];
                var val_n =[];

                for(var g=0;g<colbox.length;g++){
                var dis = df.distinct(colbox[g])
                var arrc = dis.toArray();
                for (var s of arrc) {
                    for (var v of s) {
                        if(typeof(v) === 'string')
                        {
                            val_s.push(v);
                        }
                        else
                        {val_n.push(v);}
                    }
                }
            }

            console.log(val_s);
            console.log(val_n); 

        var selected_data_string= [];
        var selected_data_number= [];
        var myMap1 = new Map();
        var myMap2 = new Map();

        for(var g=0;g<colbox.length;g++)
        {
            var t = df.toArray(colbox[g]);
            for (var q of t) {
                if(typeof(q) === 'string')
                {
                    selected_data_string.push(t);
                    break;
                }
                else
                {
                   selected_data_number.push(t);
                   break; 
                }
            }
        }

        console.log(selected_data_string);
        console.log(selected_data_number);

        if(val_s.length > 0){

        var v = selected_data_string[0];
        for(var e=1;e<selected_data_string.length;e++)
        {
        Array.prototype.push.apply(v, selected_data_string[e]);
        }

        
        for(var j=0;j<v.length;j++)
            {
                if(myMap1.has(v[j]))
                {
                    myMap1.set(v[j],myMap1.get(v[j]) + 1);
                }
                else
                {
                var initalize = 1;
                myMap1.set(v[j],initalize);  
                }
            }

            console.log(myMap1);

            var fil = document.querySelectorAll("[id='fil']");   //document.getElementsByClassName("test");
            var nr_fil = fil.length;

            var filter_check=[];

            for(var j=0; j<nr_fil; j++) {
            if(fil[j].type == 'checkbox' && fil[j].checked == true) filter_check.push(fil[j].value);
            }

            //console.log(filter_check);

            for(var q=0;q<filter_check.length;q++)
            {
                myMap1.delete(filter_check[q]);
            }

            console.log(myMap1);

        }

        if(val_n.length > 0){

        var n = selected_data_number[0];
        for(var e=1;e<selected_data_string.length;e++)
        {
        Array.prototype.push.apply(n, selected_data_number[e]);
        }
            
            for(var j=0;j<n.length;j++)
            {
                if(myMap2.has(n[j]))
                {
                    myMap2.set(n[j],myMap2.get(n[j]) + 1);
                }
                else
                {
                var initalize = 1;
                myMap2.set(n[j],initalize);  
                }
            }

            console.log(myMap2);

            //var con1 = document.querySelectorAll("[id='cond_num']");   //document.getElementsByClassName("test");
            //var nr_con1 = con1.length;

            var fil1 = document.querySelectorAll("[id='fil_num']");
            //console.log(fil1);
            var nr_fil1 = fil1.length;

            var filter_check_num=[];

            for(var j=0; j<nr_fil1; j++) {
            if(fil1[j].type == 'radio' && fil1[j].checked == true) filter_check_num.push(fil1[j].value);
            }

            var arr_ke = new Array();
            for(var [key, value] of myMap2.entries())
            {
                arr_ke.push(key);
            }

            function isGreater(value) {
                var co = document.querySelector('input[name="fil_num"]:checked').value;
            return value >= co
            }

            function isLower(value) {
                var co1 = document.querySelector('input[name="fil_num"]:checked').value;
            return value <= co1
            }


            if(document.querySelector('input[name="cond_num"]:checked'))
            {
            var cond_variable = document.querySelector('input[name="cond_num"]:checked').value;
            console.log(cond_variable);

            //["Greater than Equal to", "Less than Equal to","Equal to"]

            var filtered_high;
            var filtered_low;
            if(cond_variable == "Greater than Equal to")
            {
                console.log("High");
                filtered_high = arr_ke.filter(isGreater);
                console.log(filtered_high);
                for(var i=0;i<filtered_high.length;i++)
                {
                    myMap2.delete(parseInt(filtered_high[i]));
                }


            }else if(cond_variable == "Less than Equal to")
            {
                console.log("Low");
                filtered_low = arr_ke.filter(isLower);
                console.log(filtered_low);
                for(var i=0;i<filtered_low.length;i++)
                {
                    console.log(filtered_low[i]);
                    myMap2.delete(parseInt(filtered_low[i]));
                }
            }
            else
            {
                console.log("Equal");
                var eq1 = document.querySelector('input[name="fil_num"]:checked').value;
                myMap2.delete(parseInt(eq1));
            }
            
            //console.log(arr_ke);
            console.log(myMap2);
        }

    }

            var merged = new Map([...myMap1, ...myMap2])
            console.log(merged);

            var labels=[];
            var data_points=[];
            for (var [key, value] of merged.entries()) {
                labels.push(key);
                data_points.push(value);
            }

            
            for(var y=0;y<selchbox.length;y++)
            {
            if(selchbox[y] == 'Pie Chart')
            {
                //console.log("1");
                var chart_pie = new pie_chart(labels,data_points,document.getElementById("chart-area1").getContext("2d"));
                chart_pie.create_settings();
				chart_pie.drawChart();
            }
            else if(selchbox[y] == 'Bar Chart')
            {
                //console.log("2");
                var chart_bar = new bar_chart(labels,data_points,document.getElementById("chart-area2").getContext("2d"));
                chart_bar.create_settings();
				const root = ReactDOM.createRoot(document.getElementById('chart-area2')); 
                root.render(chart_bar.drawChart());
            }
            else if(selchbox[y] == 'Line Chart')
            {
                //console.log("3");
                var chart_line = new line_chart(labels,data_points,document.getElementById("chart-area3").getContext("2d"));
                chart_line.create_settings();
                const root = ReactDOM.createRoot(document.getElementById('chart-area3')); 
                root.render(chart_line.drawChart());
            }
            else if(selchbox[y] == 'Stack Chart')
            {
                //console.log("4");
                var selected_data=[];
                var data_stack_1=[];
                var data_stack_2=[];

                //var a = [1, 2, 3].map(function(x) x * 5);

                for(var i=0; i<data_points.length; i++) {
                data_stack_1[i] = data_points[i] * 2;
                data_stack_2[i] = data_points[i] * 3;
                }

                selected_data.push(data_points);
                selected_data.push(data_stack_1);
                selected_data.push(data_stack_2);

                console.log(selected_data);

                var chart_stack = new stack_chart(labels,selected_data,document.getElementById("chart-area4").getContext("2d"));
                chart_stack.create_settings();
				const root = ReactDOM.createRoot(document.getElementById('chart-area4')); 
                root.render(chart_stack.drawChart());
            }
        }   

        });
        
    }
    else
    {
      
        DataFrame.fromJSON(this.Json3, true).then(
        df => {

            var new_col_df = df.restructure(colbox);
                console.log(new_col_df.show());

                var val_s =[];
                var val_n =[];

                for(var g=0;g<colbox.length;g++){
                var dis = df.distinct(colbox[g])
                var arrc = dis.toArray();
                for (var s of arrc) {
                    for (var v of s) {
                        if(typeof(v) === 'string')
                        {
                            val_s.push(v);
                        }
                        else
                        {val_n.push(v);}
                    }
                }
            }

            console.log(val_s);
            console.log(val_n); 

        var selected_data_string= [];
        var selected_data_number= [];
        var myMap1 = new Map();
        var myMap2 = new Map();

        for(var g=0;g<colbox.length;g++)
        {
            var t = df.toArray(colbox[g]);
            for (var q of t) {
                if(typeof(q) === 'string')
                {
                    selected_data_string.push(t);
                    break;
                }
                else
                {
                   selected_data_number.push(t);
                   break; 
                }
            }
        }

        console.log(selected_data_string);
        console.log(selected_data_number);

        if(val_s.length > 0){

        var v = selected_data_string[0];
        for(var e=1;e<selected_data_string.length;e++)
        {
        Array.prototype.push.apply(v, selected_data_string[e]);
        }

        
        for(var j=0;j<v.length;j++)
            {
                if(myMap1.has(v[j]))
                {
                    myMap1.set(v[j],myMap1.get(v[j]) + 1);
                }
                else
                {
                var initalize = 1;
                myMap1.set(v[j],initalize);  
                }
            }

            console.log(myMap1);

            var fil = document.querySelectorAll("[id='fil']");   //document.getElementsByClassName("test");
            var nr_fil = fil.length;

            var filter_check=[];

            for(var j=0; j<nr_fil; j++) {
            if(fil[j].type == 'checkbox' && fil[j].checked == true) filter_check.push(fil[j].value);
            }

            //console.log(filter_check);

            for(var q=0;q<filter_check.length;q++)
            {
                myMap1.delete(filter_check[q]);
            }

            console.log(myMap1);

        }

        if(val_n.length > 0){

        var n = selected_data_number[0];
        for(var e=1;e<selected_data_string.length;e++)
        {
        Array.prototype.push.apply(n, selected_data_number[e]);
        }
            
            for(var j=0;j<n.length;j++)
            {
                if(myMap2.has(n[j]))
                {
                    myMap2.set(n[j],myMap2.get(n[j]) + 1);
                }
                else
                {
                var initalize = 1;
                myMap2.set(n[j],initalize);  
                }
            }

            console.log(myMap2);

            //var con1 = document.querySelectorAll("[id='cond_num']");   //document.getElementsByClassName("test");
            //var nr_con1 = con1.length;

            var fil1 = document.querySelectorAll("[id='fil_num']");
            //console.log(fil1);
            var nr_fil1 = fil1.length;

            var filter_check_num=[];

            for(var j=0; j<nr_fil1; j++) {
            if(fil1[j].type == 'radio' && fil1[j].checked == true) filter_check_num.push(fil1[j].value);
            }

            var arr_ke = new Array();
            for(var [key, value] of myMap2.entries())
            {
                arr_ke.push(key);
            }

            function isGreater(value) {
                var co = document.querySelector('input[name="fil_num"]:checked').value;
            return value >= co
            }

            function isLower(value) {
                var co1 = document.querySelector('input[name="fil_num"]:checked').value;
            return value <= co1
            }

            if(document.querySelector('input[name="cond_num"]:checked'))
            {
            var cond_variable = document.querySelector('input[name="cond_num"]:checked').value;
            console.log(cond_variable);

            //["Greater than Equal to", "Less than Equal to","Equal to"]

            var filtered_high;
            var filtered_low;
            if(cond_variable == "Greater than Equal to")
            {
                console.log("High");
                filtered_high = arr_ke.filter(isGreater);
                console.log(filtered_high);
                for(var i=0;i<filtered_high.length;i++)
                {
                    myMap2.delete(parseInt(filtered_high[i]));
                }


            }else if(cond_variable == "Less than Equal to")
            {
                console.log("Low");
                filtered_low = arr_ke.filter(isLower);
                console.log(filtered_low);
                for(var i=0;i<filtered_low.length;i++)
                {
                    console.log(filtered_low[i]);
                    myMap2.delete(parseInt(filtered_low[i]));
                }
            }
            else
            {
                console.log("Equal");
                var eq1 = document.querySelector('input[name="fil_num"]:checked').value;
                myMap2.delete(parseInt(eq1));
            }
            
            //console.log(arr_ke);
            console.log(myMap2);
        }
    }

            var merged = new Map([...myMap1, ...myMap2])
            console.log(merged);

            var labels=[];
            var data_points=[];
            for (var [key, value] of merged.entries()) {
                labels.push(key);
                data_points.push(value);
            }

            
            for(var y=0;y<selchbox.length;y++)
            {
            if(selchbox[y] == 'Pie Chart')
            {
                //console.log("1");
                var chart_pie = new pie_chart(labels,data_points,document.getElementById("chart-area1").getContext("2d"));
                chart_pie.create_settings();
				chart_pie.drawChart();
            }
            else if(selchbox[y] == 'Bar Chart')
            {
                //console.log("2");
                var chart_bar = new bar_chart(labels,data_points,document.getElementById("chart-area2").getContext("2d"));
                chart_bar.create_settings();
				const root = ReactDOM.createRoot(document.getElementById('chart-area2')); 
                root.render(chart_bar.drawChart());
				
            }
            else if(selchbox[y] == 'Line Chart')
            {
                //console.log("3");
                var chart_line = new line_chart(labels,data_points,document.getElementById("chart-area3").getContext("2d"));
                chart_line.create_settings();
                const root = ReactDOM.createRoot(document.getElementById('chart-area3')); 
                root.render(chart_line.drawChart());
            }
            else if(selchbox[y] == 'Stack Chart')
            {
                //console.log("4");
                var selected_data=[];
                var data_stack_1=[];
                var data_stack_2=[];

                //var a = [1, 2, 3].map(function(x) x * 5);

                for(var i=0; i<data_points.length; i++) {
                data_stack_1[i] = data_points[i] * 2;
                data_stack_2[i] = data_points[i] * 3;
                }

                selected_data.push(data_points);
                selected_data.push(data_stack_1);
                selected_data.push(data_stack_2);

                console.log(selected_data);

                var chart_stack = new stack_chart(labels,selected_data,document.getElementById("chart-area4").getContext("2d"));
                chart_stack.create_settings();
				const root = ReactDOM.createRoot(document.getElementById('chart-area4')); 
                root.render(chart_stack.drawChart());
            }
        }   

        });
    }

      }
      
      getFilter() {

        var colbox1 = [];

        var inp = document.querySelectorAll("[id='col']");
        var nr_inp = inp.length;

        for(var j=0; j<nr_inp; j++) {
            if(inp[j].type == 'checkbox' && inp[j].checked == true) colbox1.push(inp[j].value);
        }

        //var DataFrame = dfjs.DataFrame;
        //var file_name= document.getElementById("jsonFileInput").files[0].name;
        var file_name= this.jsonFileInput.current.files[0].name;
        if(file_name == this.Json1)
        {

            DataFrame.fromJSON(this.Json1, true).then(
        df => {

                var new_col_df = df.restructure(colbox1);
                //console.log(new_col_df.show());

                var val_s =[];
                var val_n =[];
                var a =[];
                for(var g=0;g<colbox1.length;g++){
                var dis = df.distinct(colbox1[g]);
                var arrc = dis.toArray();
                
                for (var s of arrc) {
                    for (var v of s) {
                        if(typeof(v) === 'string')
                        {
                            val_s.push(v);
                        }
                        else
                        {val_n.push(v);}
                    }
                    a[g] = val_s.length;
                }
            }

            //var myDiv = document.getElementById("Filter"); //ilter_number
            var tab = document.createElement("table");
            var tabr = tab.insertRow(-1);
            var myDiv = this.Filter.current;
            for(var k=0;k<val_s.length;k++)
                {
                    
            var label= document.createElement("label");
            var description = document.createTextNode(val_s[k]);
            var checkbox = document.createElement("input");
            for(var p=0;p<a.length;p++){
                if(k==a[p]){
                var br = document.createElement("br");
                label.appendChild(br);
                tabr = tab.insertRow(-1);
                break;
                }
            }
            checkbox.type = "checkbox";
            checkbox.id = "fil";    // make the element a checkbox
            checkbox.name = val_s[k];      // give it a name we can check on the server side
            checkbox.value = val_s[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            var tabCell = tabr.insertCell(-1);
            tabCell.appendChild(label); 
            tabr.style.verticalAlign = "bottom";
            tabr.style.textAlign = "left";
            tabr.style.backgroundColor = "white";
            tabr.style.fontSize = "12px";
            myDiv.appendChild(tabr); }

            //var cond = ["Greater than", "Less than","Equal to"];
            var cond = ["Greater than Equal to", "Less than Equal to","Equal to"];
            //var myDiv2 = document.getElementById("Filter_cond"); //ilter_number
            var myDiv2 = this.Filter_cond.current;
            for(var k=0;k<cond.length;k++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(cond[k]);
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = "cond_num";    // make the element a checkbox
            checkbox.name = "cond_num";      // give it a name we can check on the server side
            checkbox.value = cond[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            myDiv2.appendChild(label); }

            //var myDiv1 = document.getElementById("Filter_number"); //ilter_number
            var myDiv1 = this.Filter_number.current;
            for(var k=0;k<val_n.length;k++)
                {
            var label= document.createElement("label");
            var description = document.createTextNode(val_n[k]);
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = "fil_num";    // make the element a checkbox
            checkbox.name = "fil_num";      // give it a name we can check on the server side
            checkbox.value = val_n[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            myDiv1.appendChild(label); }

            });
    }
    else if(file_name == this.Json2)
    {
        DataFrame.fromJSON(this.Json2, true).then(
        df => {

                var new_col_df = df.restructure(colbox1);
                //console.log(new_col_df.show());

                var val_s =[];
                var val_n =[];
                var a =[];
                for(var g=0;g<colbox1.length;g++){
                var dis = df.distinct(colbox1[g])
                var arrc = dis.toArray();
                for (var s of arrc) {
                    for (var v of s) {
                        if(typeof(v) === 'string')
                        {
                            val_s.push(v);
                        }
                        else
                        {val_n.push(v);}
                    }
                    a[g] = val_s.length;
                }
            }

            //var myDiv = document.getElementById("Filter"); //ilter_number
                     
            var tab = document.createElement("table");
            var tabr = tab.insertRow(-1);
            var myDiv = this.Filter.current;
            for(var k=0;k<val_s.length;k++)
                {

            var label= document.createElement("label");
            var description = document.createTextNode(val_s[k]);
            var checkbox = document.createElement("input");   
            for(var p=0;p<a.length;p++){
                if(k==a[p]){
                var br = document.createElement("br");
                label.appendChild(br);
                tabr = tab.insertRow(-1);
                break;
                }
            }
            checkbox.type = "checkbox";
            checkbox.id = "fil";    // make the element a checkbox
            checkbox.name = val_s[k];      // give it a name we can check on the server side
            checkbox.value = val_s[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
           
            var tabCell = tabr.insertCell(-1);
            tabCell.appendChild(label); 
            tabr.style.verticalAlign = "bottom";
            tabr.style.textAlign = "left";
            tabr.style.backgroundColor = "white";
            tabr.style.fontSize = "10.9px";
            myDiv.appendChild(tabr);}

            //var cond = ["Greater than", "Less than","Equal to"];
            var cond = ["Greater than Equal to", "Less than Equal to","Equal to"];
            //var myDiv2 = document.getElementById("Filter_cond"); //ilter_number
            var myDiv2 = this.Filter_cond.current;
            for(var k=0;k<cond.length;k++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(cond[k]);
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = "cond_num";    // make the element a checkbox
            checkbox.name = "cond_num";      // give it a name we can check on the server side
            checkbox.value = cond[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            myDiv2.appendChild(label); }

            //var myDiv1 = document.getElementById("Filter_number"); //ilter_number
            var myDiv1 = this.Filter_number.current;
            for(var k=0;k<val_n.length;k++)
                {
            var label= document.createElement("label");
            var description = document.createTextNode(val_n[k]);
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = "fil_num";    // make the element a checkbox
            checkbox.name = "fil_num";      // give it a name we can check on the server side
            checkbox.value = val_n[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            myDiv1.appendChild(label); }

            });

    }

    else
    {
        DataFrame.fromJSON(this.Json3, true).then(
        df => {

                var new_col_df = df.restructure(colbox1);
                //console.log(new_col_df.show());

                var val_s =[];
                var val_n =[];
                var a =[];
                for(var g=0;g<colbox1.length;g++){
                var dis = df.distinct(colbox1[g])
                var arrc = dis.toArray();
                for (var s of arrc) {
                    for (var v of s) {
                        if(typeof(v) === 'string')
                        {
                            val_s.push(v);
                        }
                        else
                        {val_n.push(v);}
                    }
                    a[g] = val_s.length;
                }
            }
            var tab = document.createElement("table");
            var tabr = tab.insertRow(-1);
            var myDiv = this.Filter.current;
            //var myDiv = document.getElementById("Filter"); //ilter_number
            for(var k=0;k<val_s.length;k++)
                {
            var label= document.createElement("label");
            var description = document.createTextNode(val_s[k]);
            var checkbox = document.createElement("input");
            for(var p=0;p<a.length;p++){
                if(k==a[p]){
                var br = document.createElement("br");
                label.appendChild(br);
                tabr = tab.insertRow(-1);
                break;
                }
            }
            checkbox.type = "checkbox";
            checkbox.id = "fil";    // make the element a checkbox
            checkbox.name = val_s[k];      // give it a name we can check on the server side
            checkbox.value = val_s[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            tab.appendChild(label);
            tabr.style.verticalAlign = "bottom";
            tabr.style.textAlign = "left";
            tabr.style.backgroundColor = "white";
            tabr.style.fontSize = "12px";
            myDiv.appendChild(tabr);}

            //var cond = ["Greater than", "Less than","Equal to"];
            var cond = ["Greater than Equal to", "Less than Equal to","Equal to"];
            //var myDiv2 = document.getElementById("Filter_cond"); //ilter_number
            var myDiv2 = this.Filter_cond.current;
            for(var k=0;k<cond.length;k++)
            {
            var label= document.createElement("label");
            var description = document.createTextNode(cond[k]);
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = "cond_num";    // make the element a checkbox
            checkbox.name = "cond_num";      // give it a name we can check on the server side
            checkbox.value = cond[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            myDiv2.appendChild(label); }

            //var myDiv1 = document.getElementById("Filter_number"); //ilter_number
            var myDiv1 = this.Filter_number.current;
            for(var k=0;k<val_n.length;k++)
                {
            var label= document.createElement("label");
            var description = document.createTextNode(val_n[k]);
            var checkbox = document.createElement("input");
            checkbox.type = "radio";
            checkbox.id = "fil_num";    // make the element a checkbox
            checkbox.name = "fil_num";      // give it a name we can check on the server side
            checkbox.value = val_n[k];         // make its value "pair"
            label.appendChild(checkbox);   // add the box to the element
            label.appendChild(description);// add the description to the element
            myDiv1.appendChild(label); }

            });
    }
    
}


    render() {
      
      return (
        <div className="analytics">
            <div className="analyticsElement">
                <p>
                    <b>Please Select the JSON Data Source</b>
                </p>
                <input type="file" ref={this.jsonFileInput} onChange={() => this.myFunction()} accept=".json" />
            </div>
            <br/><br/>
            <div className="analyticsElement">
                <button type="button" onClick={() => this.Refresh()}>Refresh</button>
            </div>
            <br/><br/>
            <br/><br/>
            <div className="analyticsElement" id="yes" style={{overflow: "scroll", border:"1px solid black", width:"1100px", height:"400px", margin:"0 auto;"}}>
                <table ref={this.DataTable}></table>
            </div>
            <div className="analyticsElement" ref={this.myDiv}>
                <p><b>Please Select the Data Labels(Columns)</b></p>
            </div>
            <br/><br/>
            <br/><br/>
            <button type="button" onClick={() =>this.getFilter()} style={{width: "200px", h: "200px", float: "left", marginLeft: "400px"}}>Add Filter</button>
            <br/><br/>
            <div className="analyticsElement" ref={this.Filter}>
                <p><b> Please Select the Filters to Exclude (Categorical Values)</b></p> 
            </div>
            <br/><br/>
            <div className="analyticsElement" ref={this.Filter_cond}>
                <p><b> Please Select the Filters Condition </b></p> 
            </div>
            <div className="analyticsElement" ref={this.Filter_number}>
                <p><b> Please Select the Value for the Filter Condition</b></p>
            </div>
            <br/><br/>
            <div className="analyticsElement" ref={this.charts}>
                <p><b> Please Select the Chart Type </b></p>
            </div>
            <br/>
            <button type="button" onClick={() =>this.getSelectedChbox()} style={{width: "200px", h: "200px", float: "left", marginLeft: "400px"}}>Apply Charts</button>
            <br/><br/>
            <table className="analyticsTable" style={{backgroundColor: "#dddddd"}}>
				<tr>			
					<td className="analyticsElement">
                        <div className="analyticsElement" id="canvas-holder1"   style={{height: "500px", marginLeft: "200px"}} >
                            <canvas id="chart-area1"/>
                        </div>
                    </td>
				    <td className="analyticsElement"><div className="analyticsElement" id="piechart"></div></td>
				</tr>
                <br/><br/>
				<tr>
                    <td className="analyticsElement">
                        <div className="analyticsElement" id="canvas-holder2">
                            <canvas id="chart-area2" />
                        </div>
                    </td>    
				    <td className="analyticsElement"><div className="analyticsElement" id="barchart"></div></td>
				</tr>
                <br/><br/>				
				<tr>
                    <td className="analyticsElement">
                        <div className="analyticsElement" id="canvas-holder3">
                            <canvas id="chart-area3" />
                        </div>
                    </td>     
				    <td className="analyticsElement"><div className="analyticsElement" id="linechart"></div></td>
				</tr>
                <br/><br/>
                <tr>
				    <td className="analyticsElement">
                        <div className="analyticsElement" id="canvas-holder4">
                            <canvas id="chart-area4" />
                        </div>
                    </td>    
				    <td className="analyticsElement"><div className="analyticsElement" id="stackchart"></div></td>
				</tr>
            </table>    
        </div>
      );
    }
  }

  export default Analytics; 