
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {
          id: 1,
          task_number: 1,
          description: 'Find Remote',
          notes: 'Check under the couch or in cushions',
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          task_number: 2,
          description: 'Gather snacks',
          notes: null,
          completed: false,
          project_id: 1
        },
        {
          id: 3,
          task_number: 3,
          description: 'Find a comfortable seat',
          notes: null,
          completed: false,
          project_id: 1
        },
        {
          id: 4,
          task_number: 4,
          description: 'Turn on tv',
          notes: null,
          completed: false,
          project_id: 1
        },
        {
          id: 5,
          task_number: 5,
          description: 'Navigate to favorite program',
          notes: null,
          completed: false,
          project_id: 1
        },
        {
          id: 6,
          task_number: 1,
          description: 'Perfect resume and portfolio',
          notes: null,
          completed: false,
          project_id: 2
        },
        {
          id: 7,
          task_number: 2,
          description: 'Find interesting job openings',
          notes: 'Check with network, Twitter, LinkedIn, Job Boards, etc.',
          completed: false,
          project_id: 2
        },
        {
          id: 8,
          task_number: 3,
          description: 'Apply for jobs/send in resumes',
          notes: null,
          completed: false,
          project_id: 2
        },
        {
          id: 9,
          task_number: 4,
          description: 'Schedule Interviews',
          notes: 'Make sure to allow sufficient time around the interview',
          completed: false,
          project_id: 2
        },
        {
          id: 10,
          task_number: 5,
          description: 'Send Thank-You notes/emails',
          notes: 'After every interview',
          completed: false,
          project_id: 2
        },
        {
          id: 11,
          task_number: 6,
          description: 'Negotiate salary on job offers',
          notes: 'Keep in mind cost of living in your area',
          completed: false,
          project_id: 2
        },
        {
          id: 12,
          task_number: 7,
          description: 'Accept amazing job offere!',
          notes: null,
          completed: false,
          project_id: 2
        },
        {
          id: 13,
          task_number: 1,
          description: 'Find medicine bottle',
          notes: 'Ensure it is the correct medicine and time to take it',
          completed: true,
          project_id: 3
        },
        {
          id: 14,
          task_number: 2,
          description: 'Get a cup of water',
          notes: null,
          completed: true,
          project_id: 3
        },
        {
          id: 15,
          task_number: 3,
          description: 'Measure out appropriate dose of medicine',
          notes: null,
          completed: true,
          project_id: 3
        },
        {
          id: 16,
          task_number: 4,
          description: 'Take medicine as prescribed',
          notes: null,
          completed: true,
          project_id: 3
        },
        {
          id: 17,
          task_number: 5,
          description: 'Place medicine back where it belongs',
          notes: null,
          completed: true,
          project_id: 3
        },
        {
          id: 18,
          task_number: 6,
          description: 'Place water cup back in kitchen',
          notes: null,
          completed: true,
          project_id: 3
        }
      ]);
    });
};
