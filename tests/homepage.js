
import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'https://www.saucedemo.com';

export const options = {
    // Keep the initial test deliberately small.
    vus: 1,
    iterations: 5,

    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<2000'],
        checks: ['rate>0.99'],
    },
};

export default function () {
    const response = http.get(BASE_URL, {
        tags: { name: 'homepage' },
    });

    check(response, {
        'homepage returns HTTP 200': (r) => r.status === 200,
        'homepage returns HTML': (r) =>
            (r.headers['Content-Type'] || '').includes('text/html'),
        'homepage contains expected page content': (r) =>
            r.body && r.body.includes('Swag Labs'),
    });

    sleep(1);
}