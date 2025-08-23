const blog_data = [
    {
      _id: "1",
      title: "The Future of AI in Everyday Life",
      subTitle: "How AI is shaping the future of productivity and innovation.",
      category: "Technology",
      description: `
        <h1>The Future of AI</h1>
        <p>Artificial Intelligence (AI) has already infiltrated our daily lives, often without us realizing it. 
        From the personalized playlists we enjoy to the predictive text that helps us type faster, AI is quietly transforming our routines.</p>
        <p>In the future, AI is expected to become an even more integral part of society. In healthcare, AI-powered diagnostics 
        will reduce misdiagnosis rates. In finance, AI will make investing more data-driven. In education, it will personalize 
        learning for each student’s pace and style.</p>
        <h2>Opportunities and Risks</h2>
        <p>With these benefits come challenges—data privacy concerns, algorithmic bias, and the ethical responsibility of 
        automation replacing human jobs. The balance between innovation and regulation will determine AI's societal impact.</p>
        <p>The key takeaway: AI is here to stay. Learning how to harness it effectively will be the difference between 
        thriving in the future or being left behind.</p>
      `,
      image: "blog_pic_1.png",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
      isPublished: true
    },
    {
      _id: "2",
      title: "10 Essential Tips for Startup Success",
      subTitle: "From idea to execution — steps to grow your startup.",
      category: "StartUp",
      description: `
        <h1>Startup Success Tips</h1>
        <p>Launching a startup is thrilling, but it’s also a high-stakes game where preparation, persistence, and adaptability 
        are key. Most startups fail due to avoidable mistakes.</p>
        <h2>Our Top 10 Tips</h2>
        <ol>
          <li>Validate your idea before building.</li>
          <li>Know your customer better than they know themselves.</li>
          <li>Start small with an MVP.</li>
          <li>Build a strong, complementary team.</li>
          <li>Keep expenses lean until revenue grows.</li>
          <li>Master digital marketing early.</li>
          <li>Stay flexible—pivot if data demands it.</li>
          <li>Listen to feedback, but filter it wisely.</li>
          <li>Track your KPIs religiously.</li>
          <li>Never stop innovating.</li>
        </ol>
        <p>With the right mindset and strategy, your startup has a real shot at success.</p>
      `,
      image: "blog_pic_2.png",
      createdAt: "2025-05-01T09:15:00.000Z",
      updatedAt: "2025-05-02T11:10:00.000Z",
      isPublished: true
    },
    {
      _id: "3",
      title: "A Detailed Step-by-Step Guide to Managing Your Lifestyle",
      subTitle: "Simple strategies to balance work, health, and happiness.",
      category: "LifeStyle",
      description: `
        <h1>Lifestyle Management</h1>
        <p>Modern life moves fast, and without conscious effort, it’s easy to drift into unhealthy routines. 
        Lifestyle management is about taking control of your daily habits and making intentional choices.</p>
        <h2>Key Steps</h2>
        <ul>
          <li>Audit your current habits.</li>
          <li>Replace harmful patterns with positive ones.</li>
          <li>Prioritize health—sleep, nutrition, and exercise.</li>
          <li>Set realistic personal and professional goals.</li>
          <li>Schedule downtime for hobbies and relaxation.</li>
        </ul>
        <p>Remember, lasting change comes from small, consistent actions over time—not overnight transformations.</p>
      `,
      image: "blog_pic_3.png",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
      isPublished: true
    },
    {
      _id: "4",
      title: "Top 5 Personal Finance Mistakes to Avoid",
      subTitle: "Avoid these common traps to achieve financial stability.",
      category: "Finance",
      description: `
        <h1>Finance Mistakes</h1>
        <p>Money management is a skill, and even small missteps can lead to long-term consequences. 
        Here are five of the most common mistakes to avoid:</p>
        <ol>
          <li>Not having an emergency fund.</li>
          <li>Overusing credit without a repayment plan.</li>
          <li>Failing to track monthly expenses.</li>
          <li>Neglecting retirement contributions.</li>
          <li>Chasing risky investments without research.</li>
        </ol>
        <p>Start by creating a realistic budget and sticking to it. Financial discipline now pays 
        huge dividends later.</p>
      `,
      image: "blog_pic_4.png",
      createdAt: "2025-06-10T12:00:00.000Z",
      updatedAt: "2025-06-12T14:00:00.000Z",
      isPublished: true
    },
    {
      _id: "5",
      title: "The Rise of Remote Work",
      subTitle: "How work-from-home is shaping the new normal.",
      category: "Technology",
      description: `
        <h1>Remote Work Revolution</h1>
        <p>Remote work has moved from a perk to a mainstream option for millions worldwide. 
        With advanced collaboration tools, companies are discovering they can operate effectively 
        without physical offices.</p>
        <p>However, remote work requires a shift in management styles, communication methods, 
        and employee accountability. While flexibility is a major benefit, challenges like 
        isolation and work-life boundaries remain.</p>
        <p>The future of work is hybrid—combining in-office collaboration with the autonomy of remote setups.</p>
      `,
      image: "blog_pic_5.png",
      createdAt: "2025-05-15T10:00:00.000Z",
      updatedAt: "2025-05-17T09:00:00.000Z",
      isPublished: true
    },
    {
      _id: "6",
      title: "Why Every Startup Needs a Strong Brand Identity",
      subTitle: "Branding is more than just a logo.",
      category: "StartUp",
      description: `
        <h1>Brand Identity for Startups</h1>
        <p>Branding is the emotional connection your customers have with your business. 
        A strong brand identity differentiates you in a crowded market and builds trust.</p>
        <h2>Core Elements</h2>
        <ul>
          <li>Logo and color palette</li>
          <li>Consistent messaging</li>
          <li>Customer experience</li>
          <li>Emotional storytelling</li>
        </ul>
        <p>Even on a tight budget, focus on creating a brand that feels authentic and resonates with your audience.</p>
      `,
      image: "blog_pic_6.png",
      createdAt: "2025-07-01T09:30:00.000Z",
      updatedAt: "2025-07-03T10:00:00.000Z",
      isPublished: true
    },
    {
      _id: "7",
      title: "Mindfulness: The Secret to a Balanced Life",
      subTitle: "Reduce stress and improve focus with mindfulness.",
      category: "LifeStyle",
      description: `
        <h1>Mindfulness</h1>
        <p>Mindfulness is the practice of being fully present and aware in the moment without judgment. 
        It has been shown to reduce stress, improve focus, and boost emotional well-being.</p>
        <h2>Simple Practices</h2>
        <ul>
          <li>Daily meditation</li>
          <li>Mindful eating</li>
          <li>Gratitude journaling</li>
        </ul>
        <p>Incorporating just a few minutes of mindfulness into your daily routine can have a profound impact on your life.</p>
      `,
      image: "blog_pic_7.png",
      createdAt: "2025-03-10T08:00:00.000Z",
      updatedAt: "2025-03-12T10:00:00.000Z",
      isPublished: true
    },
    {
      _id: "8",
      title: "Smart Investing for Beginners",
      subTitle: "Build wealth without unnecessary risk.",
      category: "Finance",
      description: `
        <h1>Investing 101</h1>
        <p>Investing is one of the best ways to grow wealth over time. However, beginners often feel 
        overwhelmed by complex terms and options.</p>
        <p>Start with safe, diversified investments like index funds. Avoid chasing trends or investing 
        in things you don’t understand. Set clear goals, stay consistent, and review your portfolio regularly.</p>
        <p>Patience is your best friend—investing is a marathon, not a sprint.</p>
      `,
      image: "blog_pic_8.png",
      createdAt: "2025-04-05T07:00:00.000Z",
      updatedAt: "2025-04-07T09:00:00.000Z",
      isPublished: true
    },
    {
      _id: "9",
      title: "How Blockchain is More Than Just Cryptocurrency",
      subTitle: "Exploring blockchain’s real-world applications.",
      category: "Technology",
      description: `
        <h1>Blockchain Beyond Crypto</h1>
        <p>While blockchain gained fame through Bitcoin, its potential goes far beyond digital currency. 
        Industries like supply chain, healthcare, and real estate are exploring blockchain for secure, 
        transparent, and tamper-proof transactions.</p>
        <p>By decentralizing trust, blockchain eliminates the need for intermediaries, reducing costs 
        and increasing efficiency.</p>
      `,
      image: "blog_pic_9.png",
      createdAt: "2025-06-01T12:00:00.000Z",
      updatedAt: "2025-06-03T14:00:00.000Z",
      isPublished: true
    },
    {
      _id: "10",
      title: "Financial Planning for Young Professionals",
      subTitle: "Start early and build long-term wealth.",
      category: "Finance",
      description: `
        <h1>Financial Planning</h1>
        <p>For young professionals, the earlier you start managing money wisely, the more freedom you’ll have later. 
        Focus on building an emergency fund, paying off high-interest debt, and investing consistently.</p>
        <p>Use budgeting apps to track spending, automate savings, and always have a clear plan for both short- 
        and long-term goals.</p>
      `,
      image: "blog_pic_10.png",
      createdAt: "2025-07-20T10:00:00.000Z",
      updatedAt: "2025-07-22T12:00:00.000Z",
      isPublished: true
    }
];
export default blog_data;