// QuickAIApp - Creates flashcards and quizzes from notes
// Built with AI Trend App Builder

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'QuickAIApp',
        description: 'Creates flashcards and quizzes from notes',
        status: 'running',
        built_at: '2026-03-29 09:00:31'
    });
});

app.get('/api/trend', (req, res) => {
    res.json({
        topic: 'AI Study Assistant',
        keywords: ["education AI","study tool","learning"]
    });
});

app.listen(PORT, () => {
    console.log(`QuickAIApp running on port `);
});
