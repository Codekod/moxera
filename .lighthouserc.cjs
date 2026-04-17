module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: "npm run dev -- --port 3000",
      startServerReadyPattern: "Ready in|ready - started server on",
      url: ["http://127.0.0.1:3000/"],
      settings: {
        preset: "desktop"
      }
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.85 }],
        "categories:accessibility": ["warn", { minScore: 0.92 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
        "first-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 3200 }],
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
