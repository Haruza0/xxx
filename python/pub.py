import redis

# สร้างการเชื่อมต่อไปยัง Redis
r = redis.Redis(host='localhost', port=6379, db=0)

# ข้อมูลที่ต้องการเก็บ
data = "Hello, Redis!"

# แปลงข้อมูลเป็น HEX
hex_data = data.encode('utf-8').hex()

# เก็บข้อมูลใน Redis
r.set('my_hex_key', hex_data)

# ถ้าต้องการตรวจสอบว่าเก็บข้อมูลได้หรือไม่
stored_data = r.get('my_hex_key')
print(f"Stored HEX data: {stored_data.decode('utf-8')}")