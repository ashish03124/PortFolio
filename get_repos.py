import urllib.request
import json

url = "https://api.github.com/users/ashish03124/repos"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as response:
        repos = json.loads(response.read().decode())
        ds_repos = []
        for r in repos:
            if not isinstance(r, dict): continue
            topics = r.get('topics', [])
            lang = r.get('language') or ''
            desc = r.get('description') or ''
            
            # Simple heuristic for Data Science
            is_ds = False
            ds_keywords = ['data', 'machine-learning', 'ml', 'ai', 'analytics', 'prediction', 'analysis', 'bot', 'deep-learning', 'nlp']
            text = (desc + ' ' + ' '.join(topics)).lower()
            if any(k in text for k in ds_keywords) or lang.lower() == 'jupyter notebook':
                is_ds = True
            
            if is_ds:
                ds_repos.append({
                    'title': r.get('name').replace('-', ' ').title(),
                    'description': desc,
                    'tech': [lang] + topics[:3],
                    'github': r.get('html_url'),
                    'demo': r.get('homepage') or '#',
                })
        print(json.dumps(ds_repos, indent=2))
except Exception as e:
    print("Error:", e)
