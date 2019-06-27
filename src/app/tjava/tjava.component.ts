import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { QretriveService } from '../service/qretrive.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountdownComponent } from 'ngx-countdown';


@Component({
  selector: 'app-tjava',
  templateUrl: './tjava.component.html',
  styleUrls: ['./tjava.component.css']
})
export class TjavaComponent implements OnInit {

  answer: any;
  showQuestions: any = [];
  index: number;
  view: any[] = [500, 500];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  colorScheme = {
    domain: ["#5AA454"]
  };

  single: any[] = [
    {
      name: "Question Attempted",
      value: 15
    },
    {
      name: "Correct Answers",
      value: 12
    },
    {
      name: "Wrong Answers",
      value: 2
    }
  ];
  public doughnutChartLabels: string[] = ['Question Attempted', 'Correct Answers', 'Wrong Answers'];
  public doughnutChartData: number[] = [15, 12, 2];
  chartOptions = {
    responsive: true
  };
  showResult: boolean = false;
  Response: any;
  questioncount: any;
  question: any = [];
  score: any;
  destroy = new Subject();
  timer: number = 0;
  rxjsTimer = timer(1000, 2000);
  timeon: Boolean = true;
  nexttime: boolean = false
 // interval: NodeJS.Timer;
  testScore: number=0;
  wrongAnswers: number;
  pager:any;
  interval:any;
  pagedItems: any;
  userdata: any;
  user=JSON.parse(localStorage.getItem('isLoggedIn'));

usermail=this.user.email;


  onSelect(event) {
    console.log(event);
  }
  showindex: number;
  timeLeft: number = 120;
  status = 'ready';
  // @ViewChild('countdown') counter: CountdownComponent;

  // start() {
  //   this.status = 'started';
  //   this.counter.begin();
  // }

  // finishTest() {
  //   console.log("count down", this.counter);
  //   setTimeout(() => this.counter.restart());
  //   this.status = 'restarted';
  // }

  // resetTimer() {
  //   this.counter.restart();
  // }
  constructor(private dataservice: DataService, private qrtr: QretriveService) { }


  showQuestion(page) {
    this.question = []
    this.timeLeft=30

    var lang = {
      "language": "java",
    
    }
    this.qrtr.qlretrive(lang).subscribe(res => {
      console.log(res)
      this.pager = this.dataservice.getPager(res[0]['count'], page)
      console.log(this.pager)
      //this.start()
      this.pagedItems = res[1]['Questions'].slice(this.pager.startIndex, this.pager.endIndex + 1);
      console.log(this.pagedItems)
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
          console.log('count down')
        }
       if(this.timeLeft==0){
        this.timeon = false;
        this.nexttime = true;
        clearInterval(this.timeLeft)
       }
      },2000)

      let data = JSON.stringify(res)
      console.log(data['Questions'])
      console.log(res[1]['Questions'])
      this.questioncount = res[0]['count']
      this.question = res[1]['Questions'];
      //this.time()
    })
  }
  time() {
    this.destroy.next(void 0)
    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(val => {
      this.timer = val;

      if (this.timer === 10) {
        this.destroy.next();
        this.timeon = false;
        this.nexttime = true;
        this.destroy.complete();
        console.log("into this");

      }
    })

  }

  ngOnInit() {
this.userdata=JSON.parse(localStorage.getItem('isLoggedIn'))
console.log(this.userdata)
    this.showindex = 0
    this.showQuestion(1)
    this.showQuestions = [
      {
        question: "Write a C program to add two numbers"
      },
      {
        question: "Write a C program to check Prime Numbers numbers"
      },
      {
        question: "Write a C program to check two numbers"
      },
      {
        question: "Write a C program to sort an array Elements"
      }
    ]
  }

  checkAnswer() {
    this.question = []
    this.nexttime = false;
    console.log("inside");
    this.timer = 0;
    

    console.log(this.showQuestions.length)
    if (this.showindex <= this.showQuestions.length) {
      this.showindex++
      console.log("into")
      this.showQuestion(this.showindex)
      console.log(this.timer)
      
let reqdata = {
  language: "java",
  script: this.answer
}
      this.dataservice.check(reqdata).subscribe((res) => {
        this.answer = '';
        console.log('response from service')
        console.log(res['output'])
       
        this.Response = res['output']
     
        if(this.Response.includes('error:')){
          this.testScore=this.testScore+0
        }
        else{
          this.testScore=this.testScore+1
        
    }
  })
}
    if (this.showindex == this.showQuestions.length) {
      this.showResult = true

  this.doughnutChartData=[this.showQuestions.length,this.testScore,this.questioncount-this.testScore]
   
    this.wrongAnswers=this.questioncount-this.testScore
    this.dataservice.storeScore({"language":"java","score":this.testScore,"user":this.userdata.username}).subscribe((res)=>{
        
      console.log(res)
      let usermail={
  "to":this.usermail,
  "user":this.userdata.username,
"subject":"Result of the test",
"text":'hello'+this.userdata.username+' your score in the recent java test is'+this.testScore

      }
      this.dataservice.sendMail(usermail).subscribe((res) => {
        console.log('mail')
        console.log(res)
    })
  
  })
  
    }
      
    //   this.score = res['status']
    //   console.log("score is ", this.score);

  
  
  }

}


