mozaiqApp.controller('AssessCtrl', ['$scope', '$rootScope', 'Type', '$http', 'UserService', function($scope, $rootScope, Type, $http, UserService){

  console.log("AssessCtrl loaded");

  //initializes user selection storage
  $scope.eIselectedOption = [];
  $scope.sNselectedOption = [];
  $scope.tFselectedOption = [];
  $scope.jPselectedOption = [];


  //check to see if # of answers == # of questions
  $scope.answers = 0;
  $scope.check = function(val,idx) {
    if(!val[idx]){
      $scope.answers += 1;
    }
    console.log('answers', $scope.answers);
  }


  //scores assessment and returns user type with percentages
  $scope.submitResponse = function() {

    console.log("$scope.eIselectedOption", $scope.eIselectedOption.length, $scope.eIselectedOption);
    console.log("$scope.sNselectedOption", $scope.sNselectedOption.length, $scope.sNselectedOption);
    console.log("$scope.tFselectedOption", $scope.tFselectedOption.length, $scope.tFselectedOption);
    console.log("$scope.jPselectedOption", $scope.jPselectedOption.length, $scope.jPselectedOption);
    console.log("$scope.ei.length", $scope.ei.length);
    console.log("$scope.sn.length", $scope.sn.length);
    console.log("$scope.tf.length", $scope.tf.length);
    console.log("$scope.jp.length", $scope.jp.length);

    var eIstring = $scope.eIselectedOption.toString();
    var sNstring = $scope.sNselectedOption.toString();
    var tFstring = $scope.tFselectedOption.toString();
    var jPstring = $scope.jPselectedOption.toString();

    var scoreDichotomy = function(result, letter) {
      return (result.match(new RegExp(letter, "g"))||[]).length;
    }

    var eCount = scoreDichotomy(eIstring, "e");
    var iCount = scoreDichotomy(eIstring, "i");
    var sCount = scoreDichotomy(sNstring, "s");
    var nCount = scoreDichotomy(sNstring, "n");
    var tCount = scoreDichotomy(tFstring, "t");
    var fCount = scoreDichotomy(tFstring, "f");
    var jCount = scoreDichotomy(jPstring, "j");
    var pCount = scoreDichotomy(jPstring, "p");


    console.log("E:", eCount, "I:", iCount, "S:", sCount, "N:", nCount, "T:", tCount, "F:", fCount, "J:", jCount, "P:", pCount)


    var getType = function(e, i, s, n, t, f, j, p) {

      if (e > i) {
        var e_i = "E"
      } else if (i > e) {
        var e_i = "I"
      } else {
        var e_i = "Whoops"
      }

      if (s > n) {
        var s_n = "S"
      } else if (n > s) {
        var s_n = "N"
      } else {
        var s_n = "Whoops"
      }

      if (t > f) {
        var t_f = "T"
      } else if (f > t) {
        var t_f = "F"
      } else {
        var t_f = "Whoops"
      }

      if (j > p) {
        var j_p = "J"
      } else if (p > j) {
        var j_p = "P"
      } else {
        var j_p = "Whoops"
      }

      return e_i + s_n + t_f + j_p;
    }


    var userType = getType(eCount, iCount, sCount, nCount, tCount, fCount, jCount, pCount);
    console.log(userType);


    //updates user type to database
    if ($rootScope.currentUser) {
      $http.put('/api/userinfo/' + $rootScope.currentUser.id, {type: userType}).success(function(data){
        console.log(data);
      }).error(function(err){
        console.log(err);
      });
    } else {
      alert("Please login with Facebook to use Mozaiq.");
    }


    $scope.userType = userType;


    UserService.check(function(err,data){
      //retrieves current user's type
      $http.get('/api/userinfo/' + UserService.currentUser.id).success(function(data){
        var type = data.type
        $rootScope.currentUserType = type;
        console.log(data.type);
      }).error(function(err){
        console.log(err);
      })
    });


    $scope.ePercent = Math.round((eCount / (eCount + iCount)) * 100);
    $scope.iPercent = Math.round((iCount / (eCount + iCount)) * 100);

    $scope.sPercent = Math.round((sCount / (sCount + nCount)) * 100);
    $scope.nPercent = Math.round((nCount / (sCount + nCount)) * 100);

    $scope.tPercent = Math.round((tCount / (tCount + fCount)) * 100);
    $scope.fPercent = Math.round((fCount / (tCount + fCount)) * 100);

    $scope.jPercent = Math.round((jCount / (jCount + pCount)) * 100);
    $scope.pPercent = Math.round((pCount / (jCount + pCount)) * 100);

  }

  $scope.userType = "";





  //questions grouped by dichotomy
  $scope.ei = [];
  $scope.sn = [];
  $scope.tf = [];
  $scope.jp = [];


  //ei questions
  for (var key in $scope.questions) {
    var q = $scope.questions[key];
    if (q.dichotomy == 'ei' && q.asked != 1) {
      $scope.ei.push(q);
    }
  }

  //sn questions
  for (var key in $scope.questions) {
    var q = $scope.questions[key];
    if (q.dichotomy == 'sn' && q.asked != 1) {
      $scope.sn.push(q);
    }
  }

  //tf questions
  for (var key in $scope.questions) {
    var q = $scope.questions[key];
    if (q.dichotomy == 'tf' && q.asked != 1) {
      $scope.tf.push(q);
    }
  }

  //jp questions
  for (var key in $scope.questions) {
    var q = $scope.questions[key];
    if (q.dichotomy == 'jp' && q.asked != 1) {
      $scope.jp.push(q);
    }
  }





  $scope.questions = [

  {
    dichotomy: "ei",
    question: "My best ideas at work come from",
    e: "an interchange of ideas and sharing with others.",
    i: "quiet thought on my own.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I would rather have a supervisor with whom I have",
    e: "a lot of day-by-day interaction.",
    i: "only infrequent interaction.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I prefer to spend my lunch hour",
    e: "eating with a group.",
    i: "eating alone or with one close colleague.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I more often prefer to keep my office door",
    e: "open.",
    i: "closed.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I dress for work",
    e: "so that other people notice and admire my clothing.",
    i: "in a way that blends in with the norm.",
    response: "",
    asked: 0
  },

  // {
  //   dichotomy: "ei",
  //   question: "I prefer most of my jobs at work to be",
  //   e: "a continuing series of short tasks.",
  //   i: "long projects on which I can concentrate my efforts.",
  //   response: "",
  //   asked: 0
  // },

  {
    dichotomy: "ei",
    question: "When I have lunch with my colleagues, I would rather",
    e: "talk about people.",
    i: "talk about ideas.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I have to organize and run a meeting, I more often",
    e: "feel satisfied that I have the opportunity to lead.",
    i: "prefer that someone else had the responsibility.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I prefer to have",
    e: "a large group of colleagues at work.",
    i: "a few colleagues that I know well.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I attend a company outing, I usually",
    e: "walk around and meet people I may not know well.",
    i: "hang out with the colleagues I know best.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "My colleagues at work are more likely to describe me as",
    e: "an energetic team player.",
    i: "a quiet and thoughtful employee.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I attend a training session, I am more likely to",
    e: "participate openly and actively.",
    i: "let others take the active role.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I have a decision to make at work, I more often",
    e: "talk it over with a number of people before I decide.",
    i: "spend most of my time working it out in my own head.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I am more interested in",
    e: "the actual tasks I am doing day-by-day.",
    i: "the thoughts I have about my work.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I ask a colleague for advice or help, I am usually",
    e: "comfortable.",
    i: "somewhat ill at ease.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I am interrupted in the middle of a tough job, I usually",
    e: "welcome the opportunity to talk to someone.",
    i: "prefer to be left alone with my thoughts.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I am at a meeting and someone tells a joke, I usually",
    e: "laugh and think of one to tell.",
    i: "enjoy the joke quietly.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "In a meeting, I usually",
    e: "speak out directly when I want to.",
    i: "wait until I am asked directly before I speak.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I would prefer to work in a company where --",
    e: "everyone works together in an open, active environment.",
    i: "people work independently in their own spaces.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I need to pass on an idea or information, I prefer to",
    e: "talk directly to people about it.",
    i: "put it in writing.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "I enjoy more",
    e: "a workday filled with variety and interactions with others.",
    i: "working without interacting with others for long periods of time.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "ei",
    question: "When I am in a meeting with colleagues and a high-ranking manager or executive comes in, I usually",
    e: "greet the person in a comfortable and friendly way.",
    i: "wait until I see how others react to him or her.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I run a meeting, I am usually",
    s: "disciplined about following my prepared agenda.",
    n: "flexible and open to whatever comes up.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "I prefer meetings where most time is spent on",
    s: "the application of the ideas discussed.",
    n: "the ideas themselves.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "If my boss gives me a difficult task, I usually",
    s: "collect as much information as possible before starting.",
    n: "dive in and rely on my ability to work things out.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When a new idea flashes into my mind, I usually",
    s: "like to test it carefully before I get excited.",
    n: "get excited and want to follow through quickly.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I solve problems, I am more likely to",
    s: "give most weight to the facts in front of me.",
    n: "explore the full range of possibilities.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I write a report, I usually think first of",
    s: "the details.",
    n: "the big picture.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "I would rather have my boss trust me with",
    s: "practical problems to solve.",
    n: "policy problems to solve.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "If I were asked to prepare a strategic plan, I would be more likely to",
    s: "emphasize what is practical now.",
    n: "orient the plan toward future possibilities.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "In one-on-one meetings, I am more likely to",
    s: "listen quietly and absorb details.",
    n: "anticipate the speaker's words and interject.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "I think my colleagues see me more",
    s: "as a here-and-now person.",
    n: "as someone with an orientation toward the future.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I prepare a presentation, I prefer to emphasize",
    s: "the use of real facts from my own experience.",
    n: "the discussion of ideas and concepts.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When colleagues and subordinates present ideas to me, I am usually",
    s: "immediately useful ideas.",
    n: "ideas with innovative approaches.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "I prefer a job where I can",
    s: "use my experience to work at familiar tasks.",
    n: "confront ideas and problems that are new to me.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I attend a training session, I usually prefer",
    s: "experiential processes.",
    n: "information and abstractions.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "In a meeting or when reading a report, I am more likely to",
    s: "remember the facts presented.",
    n: "remember mostly the concepts presented.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I read a report, I usually go first to",
    s: "the body of detailed information.",
    n: "the summary or executive overview.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "In a performance appraisal, it would be more accurate if my boss said I was",
    s: "practical.",
    n: "imaginative.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "When I start a new project, I usually",
    s: "write a step-by-step plan early in the process.",
    n: "wait and see how things develop before planning.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "I more often seek out work that applies",
    s: "my practical skills and nature.",
    n: "my ability to create new ideas and things.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "sn",
    question: "My leadership style is best described as",
    s: "practical.",
    n: "visionary.",
    response: "",
    asked: 0
  },

  // {
  //   dichotomy: "sn",
  //   question: "I prefer a work situation that is",
  //   s: "stable with little change.",
  //   n: "full of change.",
  //   response: "",
  //   asked: 0
  // },

  {
    dichotomy: "sn",
    question: "When I think of my most important work assets, they are",
    s: "more in the realm of the practical.",
    n: "more inclined toward the realm of ideas.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When handling a subordinate's development, I am most likely to",
    t: "discuss a problem I have with his or her behavior.",
    f: "dislike telling him or her unpleasant things.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "I prefer a work environment where",
    t: "frequent differences of opinion breed interesting discussions and ideas.",
    f: "conflict is reduced by avoiding discussions about differences of opinion.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "In a performance appraisal, I prefer my boss to write that I am",
    t: "intelligent and reasonable.",
    f: "warm and personable.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "In a team meeting, I prefer to emphasize",
    t: "an analytical discussion of the facts.",
    f: "a discussion of the values involved.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "If I have to confront colleagues or subordinates, I am usually",
    t: "interested in making sure I give them the facts accurately.",
    f: "more interested in making sure I don't hurt their feelings.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When I have a decision to make at work, I usually",
    t: "reason it through regardless of my feelings.",
    f: "consider my feelings to be very important.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When faced with a decision at work, I usually prefer to",
    t: "think things through.",
    f: "trust my gut feelings.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When faced with a decision at work, I usually",
    t: "focus on the facts and figures above all.",
    f: "give careful attention to people's feelings.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "If someone argues with a policy or decision I make, I usually",
    t: "remain firm.",
    f: "seek to avoid unpleasantness, anger, and disharmony.",
    response: "",
    asked: 0
  },

  // {
  //   dichotomy: "tf",
  //   question: "When I have a long and complex report to read, I am more likely to",
  //   t: "be patient and study the details.",
  //   f: "try to get the general ideas and see how I feel about them.",
  //   response: "",
  //   asked: 0
  // },

  {
    dichotomy: "tf",
    question: "I prefer to work with colleagues who",
    t: "rely heavily on logic.",
    f: "look more often to their feelings.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "If I have to deal with a colleague's feelings,  I prefer to be",
    t: "truthful even if I can't be tactful.",
    f: "tactful even if I can't tell the truth.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When I am at a meeting and a difference of opinion gets heated, I usually",
    t: "defend the side I think is most logical.",
    f: "try to create a harmonious atmosphere and solution.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When I have a meeting with a colleague, I usually",
    t: "get through it quickly in a business-like manner.",
    f: "linger over the sociable interaction.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When colleagues ask my advice about a work matter, I more often",
    t: "guide them toward a decision based purely on logic.",
    f: "help them explore the values and policies in the situation.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When I am putting forward a new idea at work, I more often",
    t: "remain firm about the correctness of it.",
    f: "try to persuade others by appealing to their sense of value.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "I am usually more interested in how my colleagues",
    t: "think about problems.",
    f: "feel about problems.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When I hear a presentation from a colleague, I am more likely to be",
    t: "openly and intellectually critical.",
    f: "careful in voicing my opinions, especially when I disagree.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "When I have to make a decision at work, I am more likely to",
    t: "analyze the situation logically without considering my values and feelings.",
    f: "put a strong emphasis on applying my values and feelings to the solution.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "In a performance appraisal meeting, I am usually more likely to",
    t: "be frank and honest regardless of feelings.",
    f: "try to smooth over any problems and avoid hurt feelings.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "My colleagues would be more likely to describe my behavior at work as --",
    t: "cool, calm, and objective.",
    f: "warm and feeling.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "tf",
    question: "In a training session or course, I prefer a trainer who depends more on",
    t: "precision and logic.",
    f: "emotion and experience.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer the place where I work to be",
    j: "structured with clear rules and regulations.",
    p: "more open-ended and laissez-faire.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer projects at work",
    j: "to be well-defined and planned out.",
    p: "to allow for flexible interpretation.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer to",
    j: "plan my workday carefully in advance.",
    p: "let the day progress and see how things turn out.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer a job in which the rewards are",
    j: "seen clearly in regular periods.",
    p: "stretched out over long periods of time.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I would rather have a boss who",
    j: "provides a lot of structure and organization.",
    p: "leaves me to do things however they work best for me.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer my own office to be one in which",
    j: "things are orderly, organized, and systematic,",
    p: "there is a creative array of projects, papers, and books.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer the work I do every day to",
    j: "be continuous and relatively predictable.",
    p: "have frequent changes in activities and schedules.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "When my boss gives me a new project, I usually prefer",
    j: "a clear statement of what is expected.",
    p: "to be left to work it out the way I want.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "When I have made a tough choice at work, I usually",
    j: "am satisfied that it is done.",
    p: "wish that I could remain open to other alternatives.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer my work environment to be",
    j: "comfortable, predictable, and stable.",
    p: "flexible and changing.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "If someone on my team is late with a scheduled task, I usually",
    j: "get impatient and annoyed.",
    p: "look for ways to stretch the deadlines.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I prefer projects that",
    j: "have a clear ending date when I know they will be finished.",
    p: "may remain open-ended to ensure that all bases are covered.",
    response: "",
    asked: 0
  }
  ,
  {
    dichotomy: "jp",
    question: "When I get a new project, I usually prefer to",
    j: "get to it and complete it as quickly as possible.",
    p: "move as slowly as allowable and explore various approaches.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I would rather be in a job with",
    j: "activities requiring me to reach a conclusion.",
    p: "activities that allow me to stay open to my experience.",
    response: "",
    asked: 0
  },

  // {
  //   dichotomy: "jp",
  //   question: "When I am in a meeting, I am usually more interested in",
  //   j: "getting the job done as quickly as possible.",
  //   p: "spending time making sure everyone gets heard.",
  //   response: "",
  //   asked: 0
  // },

  {
    dichotomy: "jp",
    question: "If my boss insists that I schedule my workday, I feel",
    j: "satisfied I am organized.",
    p: "uncomfortable that I am constrained.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "When a new and unusual policy announcement is issued at work, I am usually",
    j: "annoyed or otherwise upset at the changes.",
    p: "interested in seeing how I will handle the new environment.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "If they couldn't be both, I would rather have colleagues who are",
    j: "well-organized.",
    p: "spontaneous.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "When I present my views in a meeting, I am usually",
    j: "decisive.",
    p: "open to having others suggest changes and other views.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "When I am discussing an important issue at a meeting, I usually",
    j: "try to reach a definite conclusion quickly.",
    p: "keep the options open.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "At work, I prefer projects",
    j: "on which I work quickly to make a short deadline.",
    p: "that have longer and more flexible deadlines.",
    response: "",
    asked: 0
  },

  {
    dichotomy: "jp",
    question: "I usually push my colleagues or subordinates for --",
    j: "quick decisions.",
    p: "thorough review, even at the risk of delaying decisions.",
    response: "",
    asked: 0
  }

  ];



}])