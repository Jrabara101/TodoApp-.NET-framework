using Microsoft.AspNetCore.Mvc;
using TodoApp.Models;
using System.Text.Json;

namespace TodoApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class  TasksController : ControllerBase
    {
        private static List<TodoTask> tasks = new();
        private static int nextId = 1;

        [HttpGet]
        public IActionResult GetAll() => Ok(tasks);

        [HttpPost]
        public IActionResult Create([FromBody] TodoTask task)
        {
            if (string.IsNullOrWhiteSpace(task.Title))
                return BadRequest("Task title is required.");

            task.Id = nextId++;
            task.DateStarted = DateTime.Now;
            tasks.Add(task);

            return Ok(task);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] TodoTask updatedTask)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();

            task.Title = updatedTask.Title;
            task.Details = updatedTask.Details;
            task.AssignedTo = updatedTask.AssignedTo;
            task.Priority = updatedTask.Priority;
            task.Status = updatedTask.Status;
            task.DateOfCompletion = updatedTask.DateOfCompletion;

            return Ok(task);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();

            tasks.Remove(task);
            return Ok();
        }

        [HttpGet("export")]
        public IActionResult Export()
        {
            var json = JsonSerializer.Serialize(tasks);
            return File(System.Text.Encoding.UTF8.GetBytes(json), "application/json", "tasks.json");
        }

        [HttpPost("import")]
        public IActionResult Import([FromBody] List<TodoTask> importedTasks)
        {
            tasks = importedTasks;
            nextId = tasks.Any() ? tasks.Max(t => t.Id) + 1 : 1;
            return Ok(tasks);
        }
    }
}
    
