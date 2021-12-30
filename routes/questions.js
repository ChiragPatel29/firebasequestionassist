const router = require('express').Router();
let Question = require('../models/questionschema');
router.route('/total').get((req, res) => {
  Question.find({done:"1"}).count()
  .then(exercises => res.json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));

});

// router.route('/total').get((req, res) => {
//   Question.deleteMany({ name: 'https://www.geeksforgeeks.org/check-binary-representations-two-numbers-anagram/' })
//   .then(exercises => res.json(exercises))
//   .catch(err => res.status(400).json('Error: ' + err));

// });
//  router.route('/total').get((req, res) => {
//   ProductModel.deleteMany({ brand: 'Nike' }, function (err) {
//     if(err) console.log(err);
//     console.log("Successful deletion");
//   });


router.route('/questions/add').post((req, res) => {
  const name = req.body.qname;
  const url = req.body.url;
  const sub = req.body.sub;
  const done = "0";

  const newQuestion = new Question({
    name,
    url,
    sub,
    done
  });

  newQuestion.save()
  .then(() => res.json('Question added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/solved/:name').get((req, res) => {
  Question.find({sub:req.params.name,done: "1"})
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:name').get((req, res) => {
  Question.find({sub:req.params.name,done: "0"})
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});



// router.route('/:id').delete((req, res) => {
//   Question.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Question deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


router.route('/exercises/update/:id').post((req, res) => {
  Question.findByIdAndUpdate(req.params.id,{"done": "1"})
    .then(() => res.json('Question Solved.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// router.route('/:id').get((req, res) => {
//   Blog.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


// router.route('/update/:id').post((req, res) => {
//   Blog.findById(req.params.id)
//     .then(Blog => {
//       exercise.name = req.body.name;
//       exercise.imgsrc = req.body.imgsrc;
//       exercise.des = req.body.des;
      
//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });


module.exports = router;
