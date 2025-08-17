namespace TodoApp.Models
{
    public class TodoTask
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;   
        public string Details { get; set; } = string.Empty;
        public string AssignedTo { get; set; } = string.Empty;
        public DateTime DateStarted { get; set; }
        public DateTime? DateOfCompletion { get; set; }
        public string Priority { get; set; } = "Medium";   
        public string Status { get; set; } = "Pending";    
    }
}
