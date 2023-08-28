import os from "os";
import process from "process";

export async function GET() {
    const stats = {
        status: "OK",
        system: {
            hostname: os.hostname(),
            free_memory_mb: Math.floor(os.freemem() / 1000000),
            load_avg: os.loadavg(),
            cpu_cores: os.cpus().length,
            uptime_s: Math.round(os.uptime()),
        },
        process: {
            memory_usage_mb: Math.floor(process.memoryUsage().rss / 1000000),
            uptime_s: Math.round(process.uptime()),
        },
    };

    return new Response(JSON.stringify(stats));
}
